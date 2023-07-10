<template>
  <header>
    <h1 class="AdminHeading">Admin</h1>
  </header>
  <button
    type="button"
    class="btn btn-primary custom-btn"
    data-bs-toggle="modal"
    data-bs-target="#addModal"
  >
    Add Comic
  </button>

  <!-- Modal section -->

  <div
    class="modal fade"
    id="addModal"
    tabindex="-1"
    aria-labelledby="addModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addModalLabel">Add Comic</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form id="addForm">
            <div class="form-group">
              <label for="titleInput">Title</label>
              <input
                type="text"
                class="form-control"
                id="titleInput"
                placeholder="Enter title"
              />
            </div>
            <div class="form-group">
              <label for="publisherInput">publisher</label>
              <input
                type="text"
                class="form-control"
                id="publisherInput"
                placeholder="Enter publisher"
              />
            </div>
            <div class="form-group">
              <label for="yearInput">Year</label>
              <input
                type="number"
                class="form-control"
                id="yearInput"
                placeholder="Enter year"
              />
            </div>
            <div class="form-group">
              <label for="writerInput">Writer</label>
              <input
                type="text"
                class="form-control"
                id="writerInput"
                placeholder="Enter writer name"
              />
            </div>
            <div class="form-group">
              <label for="artistInput">Artist</label>
              <input
                type="text"
                class="form-control"
                id="artistInput"
                placeholder="Enter artist name"
              />
            </div>
            <div class="form-group">
              <label for="genreInput">Genre</label>
              <input
                type="text"
                class="form-control"
                id="genreInput"
                placeholder="Enter genre"
              />
            </div>
            <div class="form-group">
              <label for="ratingInput">Rating</label>
              <input
                type="text"
                class="form-control"
                id="ratingInput"
                placeholder="Give us a rating out of 5"
              />
            </div>
            <div class="form-group">
              <label for="summaryInput">summary</label>
              <input
                type="text"
                class="form-control"
                id="summaryInput"
                placeholder="Enter summary"
              />
            </div>
            <div class="form-group">
              <label for="awardsInput">Awards</label>
              <input
                type="text"
                class="form-control"
                id="artistInput"
                placeholder="Enter artist name"
              />
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Table section -->
  <div class="table1">
    <table class="container mb-5">
      <tr class="row-12">
        <th class="col-2"><span class="Type text-black">ID</span></th>
        <th class="col-2"><span class="Type text-black">IMAGE</span></th>
        <th class="col-2"><span class="Type text-black">TITLE</span></th>
        <th class="col-2"><span class="Type text-black">GENRE</span></th>
        <th class="col-2"><span class="Type text-black">RATING</span></th>
        <th class="col-2"><span class="Type text-black">DELETE</span></th>
        <th class="col-2"><span class="Type text-black">EDIT</span></th>
      </tr>

      <!-- Dynamically adding our content in our 'tbody' -->

      <tbody class="products">
        <tr v-for="comic in comics" :key="comic.id">
          <td>{{ comic.id }}</td>
          <td><img :src="comic.img" width="120" alt="comic.title" /></td>
          <td>{{ comic.title }}</td>
          <td>{{ comic.genre }}</td>
          <td>{{ comic.rating }}</td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteComic(comic.id)"
            >
              Delete
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              @click="editComic(comic)"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
            >
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Edit -->

  <section>
    <form id="editForm">
      <div class="form-group">
        <div class="form-group">
          <label for="idInput">Id</label>
          <input
            type="number"
            class="form-control"
            id="idInput"
            placeholder="Enter ID"
          />
        </div>
        <label for="titleInput">title</label>
        <input
          type="text"
          class="form-control"
          id="titleInput"
          placeholder="Enter title"
        />
      </div>
      <div class="form-group">
        <label for="publisherInput">publisher</label>
        <input
          type="text"
          class="form-control"
          id="publisherInput"
          placeholder="Enter publisher"
        />
      </div>
      <div class="form-group">
        <label for="yearInput">year</label>
        <input
          type="number"
          class="form-control"
          id="yearInput"
          placeholder="Enter current year"
        />
      </div>
      <div class="form-group">
        <label for="summaryInput">summary</label>
        <input
          type="number"
          class="form-control"
          id="summaryInput"
          placeholder="Give us a summary"
        />
      </div>
      <div class="form-group">
        <label for="awardsInput">awards</label>
        <input
          type="number"
          class="form-control"
          id="awardsInput"
          placeholder="Enter a number of awards"
        />
      </div>
      <div class="form-group">
        <label for="ratingInput">rating</label>
        <input
          type="number"
          class="form-control"
          id="ratingInput"
          placeholder="A rating out of 5"
        />
      </div>
      <button
        type="button"
        class="btn btn-primary"
        id="saveButton"
        style="display: none"
      >
        Save
      </button>
    </form>
  </section>
  <br />
</template>

<script>
export default {
  computed: {
    comics() {
      return this.$store.state.comics;
    },
  },
  mounted() {
    this.$store.dispatch("fetchComics");
  },
};
</script>

<style scoped>
.admin-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.AdminHeading{
  font-size: 24px;
  margin-bottom: 20px;
}

.custom-btn {
  margin-bottom: 20px;
}

.table1, .container {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.form-control {
  width: 100%;
}

/* Media Queries */
@media (max-width: 576px) {
  .admin-heading {
    font-size: 20px;
  }

  .custom-btn {
    margin-bottom: 10px;
  }

  table {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .admin-page {
    padding: 10px;
  }

  .table-container {
    overflow-x: auto;
  }
}
</style>