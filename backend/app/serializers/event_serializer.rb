class EventSerializer < ActiveModel::Serializer
  attributes :id, :description, :start, :finish, :title

  def title
    object.description
  end

end
