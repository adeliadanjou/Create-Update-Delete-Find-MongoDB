// Borro los usuarios que tengan en su email @ironhack.com
User.deleteMany({ email: /@ironhack\.com/})
  .then(successCallback)
  .catch(errorCallback);

// Borro la primera alice que encuentro
User.deleteOne({ name: "Alice"})
  .then(successCallback)
  .catch(errorCallback);

// borro el usuario de id: "5a3a7ecbc6ca8b9ce68bd41b"
User.findByIdAndRemove("5a3a7ecbc6ca8b9ce68bd41b")
  .then(successCallback)
  .catch(errorCallback);