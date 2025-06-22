
import React from 'react';
import { makeAutoObservable } from 'mobx';

export const ProjectContext = React.createContext();

export const useProject = () => React.useContext(ProjectContext);

class Project {
  cloudEnabled = false;
  designsRequested = false;
  designs = [];

  constructor({ store }) {
    this.store = store;
    makeAutoObservable(this);
  }

  loadFromLocalStorage() {
    try {
      const data = localStorage.getItem('polotno-project');
      if (data) {
        const project = JSON.parse(data);
        if (project.pages) {
          this.store.loadJSON(project);
        }
      }
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
    }
  }

  saveToLocalStorage() {
    try {
      const data = this.store.toJSON();
      localStorage.setItem('polotno-project', JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }

  createNew() {
    this.store.clear();
    this.store.addPage();
    this.saveToLocalStorage();
  }

  loadDesign(design) {
    this.store.loadJSON(design);
    this.saveToLocalStorage();
  }

  exportAsJSON() {
    return this.store.toJSON();
  }

  exportAsImage(options = {}) {
    const defaultOptions = {
      format: 'png',
      quality: 1,
      pixelRatio: 2,
    };
    return this.store.toDataURL({ ...defaultOptions, ...options });
  }

  exportAsPDF() {
    return this.store.toPDF();
  }
}

export const createProject = ({ store }) => {
  return new Project({ store });
};
