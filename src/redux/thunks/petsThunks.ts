import axios from "axios";
import { toast } from "react-toastify";
import { IPet, IPetData } from "../../types/petsTypes";
import {
  createPetActionCreator,
  deletePetActionCreator,
  editedPetActionCreator,
  getPetsActionCreator,
} from "../features/petsSlice";
import { AppDispatch } from "../store/store";

export const getPetsThunk =
  (token: string) => async (dispatch: AppDispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/pets`;
    try {
      const idLoading = toast.loading("Loading...", { isLoading: true });

      const { status, data: pets } = await axios.get(url, {
        headers: { authorization: `Bearer ${token}` },
      });

      toast.dismiss(idLoading);

      if (status === 200) {
        dispatch(getPetsActionCreator(pets));
      }
    } catch {
      toast.error("No pets found");
    }
  };

export const deletePetThunk =
  (token: string, idToDelete: string) => async (dispatch: AppDispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/pets/${idToDelete}`;
    try {
      const idLoading = toast.loading("Loading...", { isLoading: true });

      const { status } = await axios.delete(url, {
        headers: { authorization: `Bearer ${token}` },
      });

      toast.dismiss(idLoading);

      if (status === 200) {
        dispatch(deletePetActionCreator(idToDelete));

        toast.success("Pet deleted");
      }
    } catch {
      toast.error("Error deleting Pet");
    }
  };

export const createPetThunk =
  (token: string, newPet: IPetData) => async (dispatch: AppDispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/pets/create`;
    try {
      const idLoading = toast.loading("Loading...", { isLoading: true });

      const { status, data: createdPet } = await axios.post(url, newPet, {
        headers: { authorization: `Bearer ${token}` },
      });

      toast.dismiss(idLoading);

      if (status === 201) {
        dispatch(createPetActionCreator(createdPet));

        toast.success("Pet created");
      }
    } catch {
      toast.error("Error creating Pet");
    }
  };

export const editPetThunk =
  (token: string, modifiedPet: IPet) => async (dispatch: AppDispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/pets/edit`;
    try {
      const idLoading = toast.loading("Loading...", { isLoading: true });

      const { status } = await axios.put(url, modifiedPet, {
        headers: { authorization: `Bearer ${token}` },
      });

      toast.dismiss(idLoading);

      if (status === 204) {
        dispatch(editedPetActionCreator(modifiedPet));

        toast.success("Pet edited");
      }
    } catch {
      toast.error("Error editing Pet");
    }
  };
