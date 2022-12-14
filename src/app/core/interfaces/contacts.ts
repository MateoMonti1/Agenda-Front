export interface Contact{
  first_name: string,
  last_name: string,
  phone1: string,
  phone2: string,
  type: string,
  description: string,
}

export interface Name_Contact{
  first_name: string,
}

export const name_contacts:Name_Contact[] =[{
  
  
  "first_name":"Bari"},{"first_name":"Ajay"},{"first_name":"Maurene"},
  {"first_name":"Vittoria"},{"first_name":"Sheffield"},{"first_name":"Lawry"},
  {"first_name":"Korella"},{"first_name":"Dianna"},
  {"first_name":"Florenza"},{"first_name":"Layton"}

]

export const contacts :Contact[] =  [{"first_name":"Bari","last_name":"Drover","phone1":"3238118551","phone2":"4829064904","type":"Celular","description":"Oficina"},
{"first_name":"Ajay","last_name":"Sidworth","phone1":"5549690535","phone2":"3601285265", "type":"Fax","description":"Casa"},
{"first_name":"Maurene","last_name":"Hagergham","phone1":"9234704980","phone2":"8203860532","type":"Fijo","description":"Trabajo"},
]