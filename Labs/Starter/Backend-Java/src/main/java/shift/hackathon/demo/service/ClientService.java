package shift.hackathon.demo.service;

import java.util.List;
import java.util.Optional;

import shift.hackathon.demo.entity.Client;


public interface ClientService {

    Client create(Client client);
	
    Client update(Long id, Client client);
	
	List<Client> findAll();
	
	Optional<Client> findOne(Long id);
	
	void delete(Long id);

	
}
