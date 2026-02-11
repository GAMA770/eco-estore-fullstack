import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [search, setSearch] = useState('')
  
  // NOVO ESTADO: Guarda o ID do produto que está sendo editado
  const [editingId, setEditingId] = useState(null)

  useEffect(() => { fetchProducts() }, [])

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/products")
      setProducts(response.data)
    } catch (error) { console.error(error) }
  }

  // Função para carregar os dados no formulário ao clicar em Editar
  const startEdit = (product) => {
    setEditingId(product.id)
    setName(product.name)
    setPrice(product.price)
    setQuantity(product.quantity)
  }

  // Função para cancelar a edição
  const cancelEdit = () => {
    setEditingId(null)
    setName(''); setPrice(''); setQuantity('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingId) {
        // Se tem ID, faz um PUT para atualizar
        await axios.put(`http://localhost:8080/products/${editingId}`, { name, price, quantity })
        alert("Produto atualizado!")
      } else {
        // Se NÃO tem ID, faz um POST para criar novo
        await axios.post("http://localhost:8080/products", { name, price, quantity })
        alert("Produto cadastrado!")
      }
      cancelEdit()
      fetchProducts()
    } catch (error) { alert("Erro na operação.") }
  }

  const deleteProduct = async (id) => {
    if (window.confirm("Deseja excluir?")) {
      await axios.delete(`http://localhost:8080/products/${id}`)
      fetchProducts()
    }
  }

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="container">
      <h1>📦 Eco-Store Manager</h1>

      <div className="card" style={{ border: editingId ? '2px solid #4f46e5' : 'none' }}>
        <h3>{editingId ? "📝 Editando Produto" : "✨ Novo Produto"}</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required />
          <input type="number" step="0.01" placeholder="Preço" value={price} onChange={e => setPrice(e.target.value)} required />
          <input type="number" placeholder="Qtd" value={quantity} onChange={e => setQuantity(e.target.value)} required />
          
          <button type="submit" className="btn-add" style={{ backgroundColor: editingId ? '#1207e8' : '#10b981' }}>
            {editingId ? "Salvar" : "Cadastrar"}
          </button>
          
          {editingId && (
            <button type="button" onClick={cancelEdit} style={{ background: '#94a3b8', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
              Cancelar
            </button>
          )}
        </form>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input type="text" placeholder="🔍 Pesquisar..." className="search-input" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>R$ {p.price.toFixed(2)}</td>
              <td>{p.quantity} un.</td>
              <td>
                <button onClick={() => startEdit(p)} style={{ marginRight: '8px', backgroundColor: '#f59e0b', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}>Editar</button>
                <button onClick={() => deleteProduct(p.id)} className="btn-delete">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App