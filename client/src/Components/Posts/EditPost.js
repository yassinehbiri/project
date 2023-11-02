import React, { useState,useEffect } from 'react';
import {  Form, InputGroup, ProgressBar } from 'react-bootstrap';
import './CustomForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector} from "react-redux"
import {useNavigate, useParams} from "react-router-dom"
import {updatePost,getOnePost} from "../../Redux/Actions/PostActions"
import{FormStyle,FormStyle2,FormStylePL,FormStyleP, progressBarStyle,titleStyle} from '../Styles'
import axios from 'axios';



const EditPost = () => {

  

  const dispatch = useDispatch()
  
  const {id}= useParams()
  useEffect(()=>{
    dispatch(getOnePost(id))
},[dispatch,id])
const Post = useSelector(state=>state.PostReducer.onePost)

const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [marque, setMarque] = useState('')
  const [model, setModel] = useState('')
  const [puissanceF, setPuissanceF] = useState('')
  const [carburant, setCarburant] = useState('')
  const [year, setYear] = useState(0)
  const [boite, setBoite] = useState('')
  const [kilometrage, setKilometrage] = useState(0)
  const [gouvernorat, setGouvernorat] = useState('Tunis')
  const [delegation, setDelegation] = useState('Tunis')
  const [price, setPrice] = useState(0)
  const [phone, setPhone] = useState(0)
  const [image, setImage] = useState('')
  const [carrosserie, setCarrosserie] = useState('')

    
    useEffect(()=>{
      setTitle(Post.title)
      setDescription(Post.description)
      setMarque(Post.marque)
      setModel(Post.model)
      setPuissanceF(Post.puissanceF)
      setCarburant(Post.carburant)
      setYear(Post.year)
      setKilometrage(Post.kilometrage)
      setDelegation(Post.delegation)
      setPrice(Post.price)
      setPhone(Post.phone)
      setImage(Post.image)
      setCarrosserie(Post.carrosserie)
  
    },[Post,id])

    const navigate=useNavigate()

    const handleUpdate =(a)=>{
      a.preventDefault()
      dispatch(updatePost({title,description,category,marque,model,puissanceF,carburant,year,boite,kilometrage,gouvernorat,delegation,price,phone,image,carrosserie},Post._id,navigate))
  
      }

  const [step, setStep] = useState(1);
  const [uploading, setUploading] = useState(false);
  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setUploading(true);
    axios
      .post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setImage(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };

  const nextStep = (a) => {
    a.preventDefault()
    setStep(step + 1);
  };

  const previousStep = (a) => {
    a.preventDefault()
    setStep(step - 1);
  };

  


  

  const renderStep = () => {
 
    switch (step) {
      case 1:
        return (

          <div sticky="0">
            <h1 style={titleStyle}>Créer une annonce</h1> 
            <ProgressBar style={progressBarStyle}  now={33} variant='dark'/>

            <div className='FormBox'>

            <h3 className='headerTextForm'>Infos générales (obligatoires)</h3>
                <Form.Label className='custom-label'>Choisir une catégorie</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e)=>setCategory(e.target.value)} style={FormStyle} className="custom-input" >
                    <option value="Others">Catégorie</option>
                    <option value="Voitures">Voitures</option>
                    <option value="Voitures commerciales">Voitures commerciales</option>
                    <option value="Motos">Motos</option>
                    <option value="Camions">Camions</option>
                    <option value="Autres">Autres</option>

                </Form.Select>
                

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='custom-label'>Titre de l'annonce</Form.Label>
                    <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)}  type="text" placeholder="Entrer le titre" style={FormStyle} className='custom-input'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className='custom-label'>Description de l'annonce</Form.Label>
                  <Form.Control value={description} onChange={(e)=>setDescription(e.target.value)}  as="textarea" placeholder="Décrire votre annonce" rows={3} className="custom-input" style={FormStyle2}  />
                </Form.Group>

                <Form.Label  className='custom-label'>Prix</Form.Label>

                <InputGroup className="mb-3">
                  <Form.Control value={price} onChange={(e)=>setPrice(e.target.value)}  type="number" style={FormStyleP}  placeholder="Entrez le prix en dinars tunisien" className="custom-input" aria-label="Amount (to the nearest dollar)" />
                  <InputGroup.Text type="number" style={FormStylePL}>DT</InputGroup.Text>
                </InputGroup>
                
          </div>
            </div>

        );
      case 2:
        return (
          <div>
            <h1 className='headerTextStyle'>Créer une annonce</h1> 
            <ProgressBar style={progressBarStyle} variant='dark'  now={66} />

          <div className='FormBox'>

          <h3 className='headerTextForm'>Critères (obligatoires)</h3>

              <div className='d-flex justify-content-between my-4'>

              <Form.Select value={marque} onChange={(e)=>setMarque(e.target.value)} aria-label="Default select example"  style={FormStyle} className="custom-input" >
                  <option><FontAwesomeIcon icon={faFilter} /> Marque</option>                 
                  <option value="Marque-1">Marque 1</option>
                  <option value="Marque-2">Marque 2</option>
                  <option value="Marque-3">Marque 3</option>
                  <option value="Marque-4">Marque 4</option>
              </Form.Select>
              <Form.Label className='custom-label'></Form.Label>

              <Form.Select value={model} onChange={(e)=>setModel(e.target.value)} aria-label="Default select example"  style={FormStyle} className="custom-input" >
              <option value="">Select Model</option>
          <option value="Modele-1">Modèle 1</option>
          <option value="Modele-2">Modèle 2</option>
          <option value="Modele-3">Modèle 3</option>
          <option value="Modele-4">Modèle 4</option>
              </Form.Select>

              </div>


              <div className='d-flex justify-content-between my-4'>
              <InputGroup className="custom-input">
                  <Form.Control value={kilometrage} onChange={(e)=>setKilometrage(e.target.value)} type="number" style={FormStyle}  placeholder="Kilométrage" className="custom-input" aria-label="Amount (to the nearest dollar)" />
                </InputGroup>

                <Form.Label className='custom-label'></Form.Label>
              <InputGroup className="custom-input">
                  <Form.Control value={year} onChange={(e)=>setYear(e.target.value)} type="number" style={FormStyle}  placeholder="Année" className="custom-input" aria-label="Amount (to the nearest dollar)" />
                </InputGroup>

              </div>


              <div className='d-flex justify-content-between my-4'>
              <Form.Select value={puissanceF} onChange={(e)=>setPuissanceF(e.target.value)} aria-label="Default select example"  style={FormStyle} className="" >
                  <option> Puissance fiscale</option>                 
                  <option value="4 CV"> 4 CV</option>
                  <option value="5 CV"> 5 CV</option>
                  <option value="6 CV"> 6 CV</option>
                  


              </Form.Select>

              <Form.Label className='custom-label'></Form.Label>
              <Form.Select value={boite} onChange={(e)=>setBoite(e.target.value)} className='custom-input' aria-label="Default select example"  style={FormStyle} >
                  <option>Boite </option>
                  <option value="Automatique">Automatique</option>
                  <option value="Manuelle">Manuelle</option>
                 
              </Form.Select>

              </div>

              <div className='d-flex justify-content-between my-4'>
              <Form.Select value={carrosserie} onChange={(e)=>setCarrosserie(e.target.value)} aria-label="Default select example"  style={FormStyle} className="" >
                  <option> Type de carrosserie</option>                 
                  <option value="Compacte"> Compacte</option>
                  <option value="Cabriolet"> Cabriolet</option>
                  

              </Form.Select>

              <Form.Label className='custom-label'></Form.Label>
              <Form.Select value={carburant} onChange={(e)=>setCarburant(e.target.value)} className='custom-input' aria-label="Default select example"  style={FormStyle} >
                  <option>Carburant</option>
                  <option value="Essence">Essence</option>
                  <option value="Diesel">Diesel </option>
                  <option value="Électrique">Électrique </option>
                  <option value="Hybride">Hybride </option>
                  <option value="GPL">GPL </option>
                 
              </Form.Select>

              </div>
              
        </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h1 className='headerTextStyle'>Créer une annonce</h1> 
            <ProgressBar style={progressBarStyle}  now={100} variant='dark'/>

          <div className='FormBox'>
          <h3 className='headerTextForm'>Photos, emplacement et contact (obligatoires)</h3>
          <div className='UploadPhoto'>
           <h1>Télécharger une image</h1>
           <>
                  {image ? (
                    <img
                      src={image}
                      width="100%"
                      style={{ margin: "8px 0" }}
                      height="150px"
                      alt="product"
                    />
                  ) : (
                    <div style={{ margin: "8px 0" }}>
                      {!uploading ? "Upload Image For Product" : "Loading ..."}
                    </div>
                  )}
                  <div
                  >
                    Select File
                    <input
                      accept="image/*"
                      type="file"

                      onChange={uploadProfileImage}
                    />
                  </div>
                </>
    </div>

                    <Form.Label className='custom-label'>Choisir l'emplacement</Form.Label>

          <div className='d-flex justify-content-between my-4'>

              <Form.Select value={gouvernorat} onChange={(e)=>setGouvernorat(e.target.value)} aria-label="Default select example"  style={FormStyle} className="" >
                  <option value='Gouvernorat'> Gouvernorat </option> 
                  <option value="Ariana">Ariana</option>
                  <option value="Béja">Béja</option>
                  <option value="Ben Arous">Ben Arous</option>
                  <option value="Bizerte">Bizerte</option>
                  <option value="Gabès">Gabès</option>
                  <option value="Gafsa">Gafsa</option>
                  <option value="Jendouba">Jendouba</option>
                  <option value="Kairouan">Kairouan</option>
                  <option value="Kasserine">Kasserine</option>
                  <option value="Kébili">Kébili</option>
                  <option value="Le Kef">Le Kef</option>
                  <option value="Mahdia">Mahdia</option>
                  <option value="La Manouba">La Manouba</option>
                  <option value="Médenine">Médenine</option>
                  <option value="Monastir">Monastir</option>
                  <option value="Nabeul">Nabeul</option>
                  <option value="Sfax">Sfax</option>
                  <option value="Sidi Bouzid">Sidi Bouzid</option>
                  <option value="Siliana">Siliana</option>
                  <option value="Sousse">Sousse</option>
                  <option value="Tataouine">Tataouine</option>
                  <option value="Tozeur">Tozeur</option>
                  <option value="Tunis">Tunis</option>
                  <option value="Zaghouan">Zaghouan</option>                
          

                 
              </Form.Select>

              <Form.Label className='custom-label'></Form.Label>
              <Form.Select value={delegation} onChange={(e)=>setDelegation(e.target.value)} className='custom-input' aria-label="Default select example"  style={FormStyle} >
                  <option value={'Délégation'}>Délégation </option>
                  <option value="aouina">aouina</option>
                  <option value="mourouj">mourouj</option>

              </Form.Select>

              </div>

              <Form.Label  className='custom-label'> Numéro de contact </Form.Label>
              <InputGroup className="custom-input">
                  <Form.Control value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" style={FormStyle}  placeholder="Numéro de téléphone" className="custom-input" aria-label="Amount (to the nearest dollar)" />
                </InputGroup>
          </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <form>
            {renderStep()}
           
            {step < 3 ? (

              <button className='btnNext' type="button"  onClick={(e)=>nextStep(e)}>
                Suivant
              </button>
            ) : (
              <button className='btnNext' type="submit" onClick={(e)=>handleUpdate(e)}>
                Envoyer
              </button>
            )}
             {step > 1 && (
              <button type="button" className='btnPrev' onClick={(e)=>previousStep(e)}>
                Retour
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPost;

