class EventSerializer < ActiveModel::Serializer
  attributes :id, :description, :start, :finish 

end
