package shift.hackathon.demo.repository;

import javax.enterprise.context.ApplicationScoped;

import shift.hackathon.demo.entity.Client;

import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

@ApplicationScoped
public class ClientRepository  implements PanacheRepositoryBase<Client,Long>{

}
