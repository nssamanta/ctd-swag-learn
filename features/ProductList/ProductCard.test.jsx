import { describe, expect, it, vi } from 'vitest';
import ProductCard from './ProductCard';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ProductCard component', () => {
  function setup(jsx) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    };
  }

  const testProduct = {
    baseName: 'Test Product',
    baseDescription: 'Test product description',
    variants: [{ id: 1 }],
    handleAddItemToCart: vi.fn((id) => id),
  };

  it('button fires callback', async () => {
    const { user } = setup(
      <ProductCard
        baseName={testProduct.baseName}
        baseDescription={testProduct.baseDescription}
        variants={testProduct.variants}
        handleAddItemToCart={testProduct.handleAddItemToCart}
      />
    );
    /* original from lesson
    await user.click(screen.getByRole('button'));
    expect(testProduct.handleAddItemToCart).toHaveBeenCalled();
    vi.clearAllMocks();*/
    //debug button element
    const button = screen.getByRole('button');
    screen.debug(button);
    await user.click(button);
    expect(testProduct.handleAddItemToCart).toHaveBeenCalled();
    vi.clearAllMocks();
  });

    it('callback returns product id', async () => {
      const { user } = setup(
        <ProductCard
          baseName={testProduct.baseName}
          baseDescription={testProduct.baseDescription}
          variants={testProduct.variants}
          handleAddItemToCart={testProduct.handleAddItemToCart}
        />
      );
      /*
      await user.click(screen.getByRole('button'));
      //expect it to return the variant's id, not testProduct.id from lesson
      expect(testProduct.handleAddItemToCart).toHaveReturnedWith(
        testProduct.variants[0].id
      );
      vi.clearAllMocks();*/

      const button = screen.getByRole('button');
      screen.debug(button);
      await user.click(button);
      expect(testProduct.handleAddItemToCart).toHaveReturnedWith(
        testProduct.variants[0].id
      );
      vi.clearAllMocks();
    });

  it('includes an h2 containing "Test Product"', () => {
    render(
      <ProductCard
        baseName={testProduct.baseName}
        baseDescription={testProduct.baseDescription}
        variants={testProduct.variants}
        handleAddItemToCart={testProduct.handleAddItemToCart}
      />
    );
    /*original from lesson
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      testProduct.baseName
    );*/
    //debug just the specific element
    const heading = screen.getByRole('heading', { level: 2 });
    screen.debug(heading);
    expect(heading).toHaveTextContent(testProduct.baseName);

    /*Debug the entire rendered component 
        screen.debug();
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveTextContent(testProduct.baseName);*/
  });
});
