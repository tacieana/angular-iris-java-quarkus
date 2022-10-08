package shift.hackathon.demo.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class ServiceOrder {

	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  @EqualsAndHashCode.Include
	  private Long tbl_serviceOrder;
	  
	  @Column(name = "service_order_number")
	  private String serviceOrderNumber;
	  
	  @OneToMany(targetEntity = Client.class)
	  private Client client;
}
