Class starter.entity.PacienteEndereco Extends %Persistent
{

Property PacienteId As %Integer [ Required ];

Property EnderecoId As %Integer [ Required ];

ForeignKey PacienteFK(PacienteId) References starter.entity.Paciente(Id);

ForeignKey EnderecoFK(EnderecoId) References starter.entity.Endereco(Id);

Index PacienteEnderecoId On (PacienteId, EnderecoId) [ PrimaryKey ];

Storage Default
{
<Data name="PacienteEnderecoDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>PacienteId</Value>
</Value>
<Value name="3">
<Value>EnderecoId</Value>
</Value>
</Data>
<DataLocation>^starter.en5C4E.PacienteEnd899CD</DataLocation>
<DefaultData>PacienteEnderecoDefaultData</DefaultData>
<IdLocation>^starter.en5C4E.PacienteEnd899CD</IdLocation>
<IndexLocation>^starter.en5C4E.PacienteEnd899CI</IndexLocation>
<StreamLocation>^starter.en5C4E.PacienteEnd899CS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
