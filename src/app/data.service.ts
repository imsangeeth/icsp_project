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

interface oracledata{
  ASSR_NAME : string;
  ASSR_PHONE : string;
  ASSR_OFFICE_PHONE : string;
  DOB : string;
  NATIONALITY : string;
  iteam : object;
}

interface isLoggedIn {
  status:boolean
}

interface reportData{
  type : string,
  item : object
}



@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  
  private serviceUrl  = "http://jsonplaceholder.typicode.com/users";

  private loggedInStatus = false;

  private heroesUrl = 'api/heroes';  // URL to web api

  private url

    //private base = "http://172.16.1.46/cepapi/";
    private base = "http://localhost/IcspApi/";

  constructor(private http: HttpClient,private auth: AuthService) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  isLoggedInt() : Observable<isLoggedIn> {
    return  this.http.get<isLoggedIn>(this.base+'Api/index.php/user/chceklg')
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }

  homedata(){
    return this.http.get<myData>('/user/chceklghome')
  }

  getUsers() {
    return this.http.get(this.base+'Api/index.php/user/viewcustomer');
  }

  check_admin() 
  {
    return this.http.get(this.base+'Api/index.php/user/check_admin');
  }

  logout()
  {
    return this.http.get(this.base+'Api/index.php/user/logout');
  }

  getofficelocation(){
    return this.http.get(this.base+'Api/index.php/user/officelocation');
  }

  getoffice_department(){
    return this.http.get(this.base+'Api/index.php/user/office_department');
  }


  office_department_user($ky){
    return this.http.get(this.base+'Api/index.php/user/office_department_user/'+$ky);
  }

  single_edit_view_service(ofid){
    return this.http.get(this.base+'Api/index.php/user/single_edit_view_service/'+ofid);
  }

  call_reason_avg()
  {
    return this.http.get(this.base+'Api/index.php/user/call_reason_avg/');
  }

  call_reason_avg_grap()
  {
    return this.http.get(this.base+'Api/index.php/user/call_reason_avg_grap/');
  }

  services_csp_corporate_phase1(ofid){
    return this.http.get(this.base+'Api/index.php/user/services_csp_corporate_phase1/'+ofid);
  }

  services_csp_corporate_phase2(ofid){
    return this.http.get(this.base+'Api/index.php/user/services_csp_corporate_phase2/'+ofid);
  }

  services_csp_corporate_phase3(ofid){
    return this.http.get(this.base+'Api/index.php/user/services_csp_corporate_phase3/'+ofid);
  }

  services_csp_corporate_phase4(ofid){
    return this.http.get(this.base+'Api/index.php/user/services_csp_corporate_phase4/'+ofid);
  }


  services_csp_insurance_phase2(ofid){
    return this.http.get(this.base+'Api/index.php/user/services_csp_insurance_phase2/'+ofid);
  }

  services_csp_insurance_phase3(ofid){
    return this.http.get(this.base+'Api/index.php/user/services_csp_insurance_phase3/'+ofid);
  }

  services_phase_category1(ofid){
    return this.http.get(this.base+'Api/index.php/user/services_phase_category1/'+ofid);
  }

  services_phase_category2(ofid){
    return this.http.get(this.base+'Api/index.php/user/services_phase_category2/'+ofid);
  }

  services_phase_category3(ofid){
    return this.http.get(this.base+'Api/index.php/user/services_phase_category3/'+ofid);
  }

  services_phase_category4(ofid){
    return this.http.get(this.base+'Api/index.php/user/services_phase_category4/'+ofid);
  }

  services_phase_category5(ofid){
    return this.http.get(this.base+'Api/index.php/user/services_phase_category5/'+ofid);
  }

  services_phase_category6(ofid){
    return this.http.get(this.base+'Api/index.php/user/services_phase_category6/'+ofid);
  }

  services_phase_user(ofid,type){
    return this.http.get(this.base+'Api/index.php/user/services_phase_user/'+ofid+'/'+type);
  }

  branchoffice(ofid){
    return this.http.get(this.base+'Api/index.php/user/officebranches/'+ofid);
  }

  branchaddress(ofid){
    return this.http.get(this.base+'Api/index.php/user/officebranchaddress/'+ofid);
  }

  insuranctype(){
    return this.http.get(this.base+'Api/index.php/user/insuranctype');
  }


  call_type(){
    return this.http.get(this.base+'Api/index.php/user/call_type');
  }

  call_reason(){
    return this.http.get(this.base+'Api/index.php/user/csp_call_reason');
  }

  insurance_phase2(typid){
    return this.http.get(this.base+'Api/index.php/user/insurance_phase2/'+typid);
  }

  insurance_phase3(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/insurance_phase3/'+phaseId);
  }

  addcallcallnote(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/addcallcallnote',contact);
  }

  called_user_details(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/called_user_details',contact);
  }

  genrate_ticket(contact)
  {
    return this.http.post<reportData>(this.base+'Api/index.php/user/genrate_ticket',contact);
  }


  viewcall_note(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/viewcall_note/'+phaseId);
  }

  editcategory_list(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/editcategory_list/',phaseId);
  }

  editcalltype(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/editcalltype/',phaseId);
  }

  delete_list(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/delete_list/',phaseId);
  }

  

  editcallreason(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/editcallreason/',phaseId);
  }

  deletecalltype(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/deletecalltype/',phaseId);
  }

  deletecallreason(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/deletecallreason/',phaseId);
  }

  editbranch_service(content)
  {
    return this.http.post(this.base+'Api/index.php/user/editbranch_service/',content);
  }

  deletedepartmentuser(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/deletedepartmentuser/',phaseId);
  }

  insurance_phase4(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/insurance_phase4/'+phaseId);
  }

  insurance_phase5(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/insurance_phase5/'+phaseId);
  }

  insurance_phase6(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/insurance_phase6/'+phaseId);
  }

  insurance_phase7(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/insurance_phase7/'+phaseId);
  }

  insurance_phase8(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/insurance_phase8/'+phaseId);
  }

  insurance_phase9(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/insurance_phase9/'+phaseId);
  }

  cspinboundphase2(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/cspinboundphase2/'+phaseId);
  }

  cspinboundphase3(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/cspinboundphase3/'+phaseId);
  }

  cspinboundphase4(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/cspinboundphase4/'+phaseId);
  }

  allinbound()
  {
    return this.http.get(this.base+'Api/index.php/user/allinbound/');
  }

  allCopType()
  {
    return this.http.get(this.base+'Api/index.php/user/allCopType/');
  }

  cop_phase2(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/cop_phase2/'+phaseId);
  }

  cop_phase3(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/cop_phase3/'+phaseId);
  }

  cop_phase4(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/cop_phase4/'+phaseId);
  }

  cop_phase5(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/cop_phase5/'+phaseId);
  }

  services_csp_inbound_phase3(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/services_csp_inbound_phase3/'+phaseId);
  }

  services_csp_inbound_phase2(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/services_csp_inbound_phase2/'+phaseId);
  }

  services_csp_inbound_phase1(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/services_csp_inbound_phase1/'+phaseId);
  }

  singleknowledge(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/singleknowledge/'+phaseId);
  }

  viewservices_module_filed(phaseId)
  {
    return this.http.get(this.base+'Api/index.php/user/viewservices_module_filed/'+phaseId);
  }

  fileupload(phaseId){

    return this.http.post(this.base+'excel_reader/fileupload.php',phaseId);
  }

  allcontacts()
  {
    return this.http.get(this.base+'Api/index.php/user/allcontacts/');
  }

  viewknowldge()
  {
    return this.http.get(this.base+'Api/index.php/user/viewknowldge');
  }

  createknowldge(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/createknowldge/',phaseId);
  }

  editknow(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/editknow/',phaseId);
  }

  deletedknowldge(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/deletedknowldge/',phaseId);
  }

  creatmasterservice(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/creatmasterservice/',phaseId);
  }

  viewcategory_list(phaseId)
  {
    return this.http.post(this.base+'Api/index.php/user/viewcategory_list/',phaseId);
  }
  viewcalltype()
  {
    return this.http.get(this.base+'Api/index.php/user/viewcalltype');
  }

  
  outbound_moredetails()
  {
    return this.http.get(this.base+'Api/index.php/user/outbound_moredetails');
  }

  view_outbound_value(ky)
  {
    return this.http.get(this.base+'Api/index.php/user/view_outbound_value/'+ky);
  }

  allfollowupdetails(ky)
  {
    return this.http.get(this.base+'Api/index.php/user/allfollowupdetails/'+ky);
  }





  out_bound_list()
  {
    return this.http.get(this.base+'Api/index.php/user/out_bound_list');
  }

  update_followup(ky)
  {
    return this.http.post(this.base+'Api/index.php/user/update_followup/',ky);
  }

  updateoutboundstatus(ky)
  {
    return this.http.post(this.base+'Api/index.php/user/updateoutboundstatus/',ky);
  }

  updateoutboundvalue(ky)
  {
    return this.http.post(this.base+'Api/index.php/user/updateoutboundvalue/',ky);
  }

  changetheoutbondassign(ky)
   {
    return this.http.post(this.base+'Api/index.php/user/changetheoutbondassign/',ky);
   }



  viewdepartment()
  {
    return this.http.get(this.base+'Api/index.php/user/viewdepartment');
  }

  viewagents()
  {
    return this.http.get(this.base+'Api/index.php/user/viewagents');
  }

  editagent(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/editagent',contact);
  }

  viewservices_module()
  {
    return this.http.get(this.base+'Api/index.php/user/viewservices_module');
  }

  viewcallreason()
  {
    return this.http.get(this.base+'Api/index.php/user/viewcallreason');
  }



  postusers(contact)
  {
    //return this.http.post('http://jsonplaceholder.typicode.com/posts',contact); 
    //return this.http.post('this.base+lab/php/json_decode.php',contact);
    return this.http.post(this.base+'Api/index.php/user/createcustomer',contact);
  }

  postcontact(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createcontact',contact);
  }

  createnewdepartment(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createnewdepartment',contact);
  }
  createnewagent(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createnewagent',contact);
  }
  editdepartment(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/editdepartment',contact);
  }

  deletedepartment(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/deletedepartment',contact);
  }

  createdepartmentuser(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createdepartmentuser',contact);
  }

  viewdepartmentuser()
  {
    return this.http.get(this.base+'Api/index.php/user/viewdepartmentuser');
  }


  editdepartmentuser(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/editdepartmentuser',contact);
  }
  
  createservice_branch(content)
  {
    return this.http.post(this.base+'Api/index.php/user/createservice_branch',content);
  }

  addnew_services_branch(content)
  {
    return this.http.post(this.base+'Api/index.php/user/addnew_services_branch',content);

  }

  createservice_ind(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createservice_ind',contact);
  }

  updateservice_ind(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/updateservice_ind',contact);
  }

  updateservice_cop(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/updateservice_cop',contact);
  }

  updateservice_inbound(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/updateservice_inbound',contact);
  }

  createcalltype(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createcalltype',contact);
  }

  createcallreason(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createcallreason',contact);
  }

  

  

  createservice_cop(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createservice_cop',contact);
  }

  createservice_inbound(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createservice_inbound',contact);
  }
  
  postservices(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createservices',contact);
  }

  postupdateservices(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/Updateservices',contact);
  }
  
  postcampaign(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createcampaign',contact);
  }
  

  geteditcontact(userId)
  {
    return this.http.get(this.base+'Api/index.php/user/editcontact/'+userId);
  }

  getupdatecontact(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/updatecontact/',contact);
  }

  getservicesdview(userId)
  {
    return this.http.get(this.base+'Api/index.php/user/createservice_cop_view/'+userId);
  }

  getcontactview(userId)
  {
    return this.http.post('http://172.16.1.46/oracle/customer_details.php/',userId);
  }

  getsearchphone(userId)
  {
    return this.http.post<oracledata>('http://172.16.1.46/oracle/searchphone.php',userId);
  }

  getsearchpolicy(userId)
  {
    return this.http.post<oracledata>('http://172.16.1.46/oracle/searchpolicy.php',userId);
  }

  getsearchchassis(userId)
  {
    return this.http.post<oracledata>('http://172.16.1.46/oracle/searchchassis.php',userId);
  }

  getsearchClaim(userId)
  {
    return this.http.post<oracledata>('http://172.16.1.46/oracle/searchClaim.php',userId);
  }

  getsearchTCNumber(userId)
  {
    return this.http.post<oracledata>('http://172.16.1.46/oracle/searchTCNumber.php',userId);
  }

  getsearchpolicyactive(userId)
  {
    return this.http.post<oracledata>('http://172.16.1.46/oracle/searchpolicyactive.php',userId);
  }
  getsearchClaimactive(userId)
  {
    return this.http.post<oracledata>('http://172.16.1.46/oracle/searchClaimactive.php',userId);
  }
  getsearchTCNumberactive(userId)
  {
    return this.http.post<oracledata>('http://172.16.1.46/oracle/searchTCNumberactive.php',userId);
  }
  getsearchphoneactive(userId)
  {
    return this.http.post<oracledata>('http://172.16.1.46/oracle/searchphoneactive.php',userId);
  }


  
  getsearchchassisactive(userId)
  {
    return this.http.post<oracledata>('http://172.16.1.46/oracle/searchchassisactive.php',userId);
  }


  vehicle_info(userId)
  {
    return this.http.post('http://172.16.1.46/oracle/vehicle.php/',userId);
  }

  claim_info(userId)
  {
    return this.http.post('http://172.16.1.46/oracle/claim_new.php/',userId);
  }



  getservicesdviedit(userId)
  {
    return this.http.get(this.base+'Api/index.php/user/servicesdetailededit/'+userId);
  }


  gettaskcomments(userId)
  {
    return this.http.get(this.base+'Api/index.php/user/taskcomments/'+userId);
  }

  policy_information(userId)
  {
    return this.http.post(this.base+'oracle/policy.php',userId);
  }

  getauditdeatils(userId)
  {
    return this.http.get(this.base+'Api/index.php/user/auditdeatils/'+userId);
  }


  posttservicescomment(contact)
  {
    return this.http.post(this.base+'Api/index.php/user/createtaskcomment/',contact);
  }

  getUserdetails(contact)
   {
    return this.http.post<myData>(this.base+'Api/index.php/user/user_check_details/',contact);
   }


   

  

}
