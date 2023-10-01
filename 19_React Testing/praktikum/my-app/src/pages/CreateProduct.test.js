/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'

import CreateProduct from "./CreateProduct";

describe('CreateProduct', () => {
    test('renders CreateProduct component', () => { 
        render(<CreateProduct/>)
        // screen.debug()

        expect(screen.getByText('Create Product')).toBeInTheDocument()
    });

    // product name
    test('input for product name', () => { 
        render(<CreateProduct/>)

        fireEvent.change(screen.getByLabelText(/Product Name/), { target: { value: 'Sample Product' } });
        expect(screen.getByLabelText(/Product Name/)).toHaveValue('Sample Product');
    });

    // product category
    test('input for product category', () => { 
        render(<CreateProduct/>)
        fireEvent.change(screen.getByLabelText(/Product Category/), { target: { value: '1' } });
    
        expect(screen.getByLabelText(/Product Category/)).toHaveValue('1');
    });

    // product description
    test('input for product description', () => { 
        render(<CreateProduct/>)

        fireEvent.change(screen.getByLabelText(/Product Description/), { target: { value: 'Produk yang bermanfaat' } });
        expect(screen.getByLabelText(/Product Description/)).toHaveValue('Produk yang bermanfaat');
    });

    // product price
    test('input for product price', () => { 
        render(<CreateProduct/>)

        fireEvent.change(screen.getByLabelText(/Product Price/), { target: { value: 123 } });
        expect(screen.getByLabelText(/Product Price/)).toHaveValue(123)
    });

    // product kosong
    test('form validation for empty Product Name', () => {
        render(<CreateProduct />);
    
        fireEvent.click(screen.getByText('Submit'));
        expect(screen.getByText('Product Name minimum 6 characters!')).toBeInTheDocument();
      });
    
    //   invalid karakter
      test('form validation for Product Name containing invalid characters', () => {
        render(<CreateProduct />);
    
        fireEvent.change(screen.getByLabelText(/Product Name/), { target: { value: 'Product@123' } });
        fireEvent.click(screen.getByText('Submit'));
        expect(screen.getByText('Product Name contains invalid characters!')).toBeInTheDocument();
      });
    
    //   maximal karakter
    test('form validation for Product Name exceeding 25 characters', () => {
        render(<CreateProduct />);

        fireEvent.change(screen.getByLabelText(/Product Name/), { target: { value: 'ThisIsAProductNameThatExceeds25Characters' } });
        fireEvent.click(screen.getByText('Submit'));
        expect(screen.getByText('Product Name maximum 25 characters!')).toBeInTheDocument();
    });
    
    // form kosong
    test('form validation for all fields being empty', () => {
        render(<CreateProduct />);
    
        fireEvent.click(screen.getByText('Submit'));
        expect(screen.getByText('Product Name minimum 6 characters!')).toBeInTheDocument();
        expect(screen.getByText('Choose Category')).toBeInTheDocument();
        expect(screen.getByText('Add Description')).toBeInTheDocument();
        expect(screen.getByText('Add Price')).toBeInTheDocument();
    });
})