import {  useState } from "react";
import { districtsfile, upazilafile, divisionfile, District, Upazila ,Division} from '../data/DbData';
export interface Dis {
   id: number | string,
   district_name: string
}
export interface Upa {
   id: number | string,
   upazila_name: string
}
const BdGetState = () => {

   const GetDbDivision = () => {
      if (divisionfile?.length > 0) {
         return divisionfile;
      }
   }

   const GetDbDistrict = (id: string | number) => {
      const [getDistrict, setGetDistrict] = useState<Dis[]>([])
      // const [districtsFile, setDistrictsFile] = useState<District[]>(districtsfile); 
      const district = districtsfile.find((dis) => dis.division_id == id);
      if (district) {
         setGetDistrict(district.districts)
      }
      return getDistrict
   }

   const GetDbUpazila = (id: string | number) => {
      const [getUpazila, setGetUpazila] = useState<Upa[]>([])
      const upazila = upazilafile.find((upa) => upa.district_id == id);
      if (upazila) {
         setGetUpazila(upazila.upazilas)
      }
      return getUpazila
   }

   return { GetDbDivision, GetDbDistrict, GetDbUpazila }
}


export { BdGetState }