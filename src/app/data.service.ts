import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model' ;
//import { Observable } from 'rxjs/Observable';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';


interface myData {
  error : boolean,
  message : string

}

interface isLoggedIn {
  status:boolean
}



@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  
  private serviceUrl  = "http://jsonplaceholder.typicode.com/users";

  private loggedInStatus = false;

  private heroesUrl = 'api/heroes';  // URL to web api

  private url

  //private base = "http://172.16.1.46/";
  private base = "http://localhost/";

  constructor(private http: HttpClient,private auth: AuthService) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  isLoggedInt() : Observable<isLoggedIn> {
    return  this.http.get<isLoggedIn>(this.base+'IcspApi/Api/index.php/user/chceklg')
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }

  homedata(){
    return this.http.get<myData>('/user/chceklghome')
  }

  getUsers() {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/viewcustomer');
  }

  getofficelocation(){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/officelocation');
  }

  getoffice_department(){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/office_department');
  }


  office_department_user($ky){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/office_department_user/'+$ky);
  }

  single_edit_view_service(ofid){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/single_edit_view_service/'+ofid);
  }


  services_csp_corporate_phase1(ofid){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/services_csp_corporate_phase1/'+ofid);
  }

  services_csp_corporate_phase2(ofid){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/services_csp_corporate_phase2/'+ofid);
  }

  services_csp_corporate_phase3(ofid){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/services_csp_corporate_phase3/'+ofid);
  }

  services_csp_corporate_phase4(ofid){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/services_csp_corporate_phase4/'+ofid);
  }


  services_csp_insurance_phase2(ofid){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/services_csp_insurance_phase2/'+ofid);
  }

  services_csp_insurance_phase3(ofid){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/services_csp_insurance_phase3/'+ofid);
  }

  services_phase_category1(ofid){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/services_phase_category1/'+ofid);
  }

  services_phase_category2(ofid){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/services_phase_category2/'+ofid);
  }

  services_phase_category3(ofid){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/services_phase_category3/'+ofid);
  }

  services_phase_category4(ofid){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/services_phase_category4/'+ofid);
  }

  services_phase_category5(ofid){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/services_phase_category5/'+ofid);
  }

  services_phase_category6(ofid){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/services_phase_category6/'+ofid);
  }

  services_phase_user(ofid,type){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/services_phase_user/'+ofid+'/'+type);
  }




  branchoffice(ofid){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/officebranches/'+ofid);
  }

  branchaddress(ofid){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/officebranchaddress/'+ofid);
  }

  insuranctype(){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/insuranctype');
  }


  call_type(){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/call_type');
  }

  call_reason(){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/csp_call_reason');
  }

  insurance_phase2(typid){
    return this.http.get(this.base+'IcspApi/Api/index.php/user/insurance_phase2/'+typid);
  }

  insurance_phase3(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/insurance_phase3/'+phaseId);
  }

  addcallcallnote(contact)
  {
    return this.http.post(this.base+'IcspApi/Api/index.php/user/addcallcallnote',contact);
  }


  viewcall_note(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/viewcall_note/'+phaseId);
  }

  insurance_phase4(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/insurance_phase4/'+phaseId);
  }

  insurance_phase5(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/insurance_phase5/'+phaseId);
  }

  insurance_phase6(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/insurance_phase6/'+phaseId);
  }

  insurance_phase7(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/insurance_phase7/'+phaseId);
  }

  insurance_phase8(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/insurance_phase8/'+phaseId);
  }

  insurance_phase9(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/insurance_phase9/'+phaseId);
  }

  cspinboundphase2(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/cspinboundphase2/'+phaseId);
  }

  cspinboundphase3(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/cspinboundphase3/'+phaseId);
  }

  cspinboundphase4(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/cspinboundphase4/'+phaseId);
  }

  allinbound()
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/allinbound/');
  }

  allCopType()
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/allCopType/');
  }

  cop_phase2(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/cop_phase2/'+phaseId);
  }

  cop_phase3(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/cop_phase3/'+phaseId);
  }

  cop_phase4(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/cop_phase4/'+phaseId);
  }

  cop_phase5(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/cop_phase5/'+phaseId);
  }

  services_csp_inbound_phase3(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/services_csp_inbound_phase3/'+phaseId);
  }

  services_csp_inbound_phase2(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/services_csp_inbound_phase2/'+phaseId);
  }

  services_csp_inbound_phase1(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/services_csp_inbound_phase1/'+phaseId);
  }

  singleknowledge(phaseId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/singleknowledge/'+phaseId);
  }

  viewcalltype()
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/viewcalltype');
  }

  viewcallreason()
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/viewcallreason');
  }



  postusers(contact)
  {
    //return this.http.post('http://jsonplaceholder.typicode.com/posts',contact); 
    //return this.http.post('this.base+lab/php/json_decode.php',contact);
    return this.http.post(this.base+'IcspApi/Api/index.php/user/createcustomer',contact);
  }

  postcontact(contact)
  {
    return this.http.post(this.base+'IcspApi/Api/index.php/user/createcontact',contact);
  }

  createservice_ind(contact)
  {
    return this.http.post(this.base+'IcspApi/Api/index.php/user/createservice_ind',contact);
  }

  updateservice_ind(contact)
  {
    return this.http.post(this.base+'IcspApi/Api/index.php/user/updateservice_ind',contact);
  }

  updateservice_cop(contact)
  {
    return this.http.post(this.base+'IcspApi/Api/index.php/user/updateservice_cop',contact);
  }

  updateservice_inbound(contact)
  {
    return this.http.post(this.base+'IcspApi/Api/index.php/user/updateservice_inbound',contact);
  }

  createcalltype(contact)
  {
    return this.http.post(this.base+'IcspApi/Api/index.php/user/createcalltype',contact);
  }

  createcallreason(contact)
  {
    return this.http.post(this.base+'IcspApi/Api/index.php/user/createcallreason',contact);
  }

  

  

  createservice_cop(contact)
  {
    return this.http.post(this.base+'IcspApi/Api/index.php/user/createservice_cop',contact);
  }

  createservice_inbound(contact)
  {
    return this.http.post(this.base+'IcspApi/Api/index.php/user/createservice_inbound',contact);
  }
  
  postservices(contact)
  {
    return this.http.post(this.base+'IcspApi/Api/index.php/user/createservices',contact);
  }

  postupdateservices(contact)
  {
    return this.http.post(this.base+'IcspApi/Api/index.php/user/Updateservices',contact);
  }
  
  postcampaign(contact)
  {
    return this.http.post(this.base+'IcspApi/Api/index.php/user/createcampaign',contact);
  }
  

  geteditcontact(userId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/editcontact/'+userId);
  }

  getupdatecontact(contact)
  {
    return this.http.post(this.base+'IcspApi/Api/index.php/user/updatecontact/',contact);
  }

  getservicesdview(userId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/createservice_cop_view/'+userId);
  }

  getcontactview(userId)
  {
    return this.http.post(this.base+'oracle/customer_details.php/',userId);
  }

  vehicle_info(userId)
  {
    return this.http.post(this.base+'oracle/vehicle.php/',userId);
  }

  claim_info(userId)
  {
    return this.http.post(this.base+'oracle/claim_new.php/',userId);
  }



  getservicesdviedit(userId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/servicesdetailededit/'+userId);
  }


  gettaskcomments(userId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/taskcomments/'+userId);
  }

  policy_information(userId)
  {
    return this.http.post(this.base+'oracle/policy.php',userId);
  }

  getauditdeatils(userId)
  {
    return this.http.get(this.base+'IcspApi/Api/index.php/user/auditdeatils/'+userId);
  }


  posttservicescomment(contact)
  {
    return this.http.post(this.base+'IcspApi/Api/index.php/user/createtaskcomment/',contact);
  }

  getUserdetails(contact)
   {
    return this.http.post<myData>(this.base+'IcspApi/Api/index.php/user/user_check_details/',contact);
   }


   

  

}
