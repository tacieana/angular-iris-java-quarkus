package shift.hackathon.demo.service.impl;

import java.util.List;
import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import javax.ws.rs.NotFoundException;

import shift.hackathon.demo.entity.Client;
import shift.hackathon.demo.repository.ClientRepository;
import shift.hackathon.demo.service.ClientService;

@ApplicationScoped
public class ClientServiceImpl implements ClientService {

	private final ClientRepository clientRepository;

	public ClientServiceImpl(ClientRepository clientRepository) {
		this.clientRepository = clientRepository;
	}

	@Override
	@Transactional
	public Client create(Client client) {
		clientRepository.persist(client);
		return client;
	}

	@Override
	@Transactional
	public Client update(Long id, Client client) {
		Optional<Client> findClient = clientRepository.findByIdOptional(id);
		if (findClient.isEmpty()) {
			throw new NotFoundException("Client " + client.getId() + "not found");
		}
		Client updatingClient = findClient.get();
		updatingClient.setFirstName(client.getFirstName());
		updatingClient.setLastName(client.getLastName());
		updatingClient.setCpf(client.getCpf());
		clientRepository.persist(updatingClient);
		return updatingClient;

	}

	@Override
	public List<Client> findAll() {
		return clientRepository.listAll();
	}

	@Override
	public Optional<Client> findOne(Long id) {
		Optional<Client> findClientById = clientRepository.findByIdOptional(id);
		if (findClientById.isEmpty()) {
			throw new NotFoundException("CLient not found");
		}
		return findClientById;
	}

	@Override
	@Transactional
	public void delete(Long id) {
		Optional<Client> findClientById = clientRepository.findByIdOptional(id);
		if (findClientById.isEmpty()) {
			throw new NotFoundException("CLient not found");
		}
		clientRepository.deleteById(id);

	}
}
