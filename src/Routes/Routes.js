import { Routes as ReactDomRoutes, Route } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import User from "../components/User/User"
import Passwords from "../components/Passwords/Passwords"
import Form from "../components/Form/Form"





const Routes = () => {
  return (
    <Layout>

      <ReactDomRoutes>

        <Route path='/' element={<User />} />

        <Route path='password' element={<Passwords />} />

        <Route path='form' element={<Form/>}/>



      </ReactDomRoutes>


    </Layout>

  )
}





export default Routes