import { connect } from 'mongoose';
async function connectDB (){
    const conn = await connect('mongodb+srv://atamboleogg:lZoBUrALhPx62KrO@cluster0.k94hmfu.mongodb.net/listacompra');
}
export default connectDB;