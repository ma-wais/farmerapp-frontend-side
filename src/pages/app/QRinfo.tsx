import Input from '../../components/app/Input';
import Layout from "./Layout"

const QRinfo:React.FC = () => {
  return (
    <Layout pageTitle='QR Code'showUI goBack>
        <ul className='list radioList bordered'>
                <li>
                        <rect x="3.25" y="5.41699" width="19.5" height="15.1667" rx="3" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.1248 7.04199L12.9998 15.167L7.0415 9.20866" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <Input type='tel' value={'Lorem Ipsum'} label={'Bank Name'} />
                </li>
                <li>
                        <rect x="3.25" y="5.41699" width="19.5" height="15.1667" rx="3" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.1248 7.04199L12.9998 15.167L7.0415 9.20866" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <Input type='tel' value={'1234566789000'} label={'Account Number'} />
                </li>   <li>
                        <rect x="3.25" y="5.41699" width="19.5" height="15.1667" rx="3" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.1248 7.04199L12.9998 15.167L7.0415 9.20866" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <Input type='tel' value={'ASDF12345676'} label={'IFSC Code'} />
                </li>   <li>
                        <rect x="3.25" y="5.41699" width="19.5" height="15.1667" rx="3" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.1248 7.04199L12.9998 15.167L7.0415 9.20866" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <Input type='tel' value={'Lorem Ipsum'} label={'Branch Name'} />
                </li>
                <li>
                    <input placeholder='Upload Screenshot' id="imageinput" type="file" accept="image/*" style={{display:'none', visibility:'hidden'}}/>
                    <label htmlFor="imageinput" className='input textSM textCenter' style={{cursor:'pointer'}} >Upload Reciept</label>
                </li>
        </ul>
    </Layout>
  )
}

export default QRinfo
