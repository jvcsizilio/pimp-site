import { Catador } from './../src/app/models/catador';
import { by, browser, element } from 'protractor';
import { CadastroPage } from './pages/cadastro.page';


describe('Cataki - New Catador - Test Suite', () => {
    const page = new CadastroPage();
    
	describe('this page should work fine', () => {
		beforeAll(() => {
			page.getPage();
		});
		
		it('Must allow fields to be filled in', () => {
			var catador = page.fillCatadorExample();
			page.fillPage(catador);
		})

		it('Must save', () => {
			page.btnSaveClick();			
		})
		
	})
})

describe('Cataki - Edit Catador - Test Suite', () => {
	const page = new CadastroPage();

	var newCatador = new Catador();
	newCatador.name = 'Catador Teste - After update';
	newCatador.phones[0].phone = '(99) 99999-8888';
    
	describe('this page should work fine', () => {
		beforeAll(() => {
			page.getEditPage();
		});
		
		it('Must allow edit fields', () => {
			var catador = page.fillCatadorExample();
			page.editCatador(newCatador);
		})

		it('Must save', () => {
			browser.sleep(5000);
			page.btnSaveClick();
		})
		
		it('Check data after update', () => {
			browser.refresh();
			page.getEditPage();
			page.checkCatadorAfterUpdate(newCatador);
		})
	})
})
