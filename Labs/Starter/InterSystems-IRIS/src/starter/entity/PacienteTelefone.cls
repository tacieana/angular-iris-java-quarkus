Class starter.entity.PacienteTelefone Extends %Persistent
{

Property PacienteId As %Integer [ Required ];

Property TelefoneId As %Integer [ Required ];

ForeignKey PacienteFK(PacienteId) References starter.entity.Paciente(Id);

ForeignKey TelefoneFK(TelefoneId) References starter.entity.Telefone(Id);

Index PacienteTelefoneId On (PacienteId, TelefoneId) [ PrimaryKey ];

Storage Default
{
<Data name="PacienteTelefoneDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>PacienteId</Value>
</Value>
<Value name="3">
<Value>TelefoneId</Value>
</Value>
</Data>
<DataLocation>^starter.en5C4E.PacienteTelA446D</DataLocation>
<DefaultData>PacienteTelefoneDefaultData</DefaultData>
<IdLocation>^starter.en5C4E.PacienteTelA446D</IdLocation>
<IndexLocation>^starter.en5C4E.PacienteTelA446I</IndexLocation>
<StreamLocation>^starter.en5C4E.PacienteTelA446S</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
