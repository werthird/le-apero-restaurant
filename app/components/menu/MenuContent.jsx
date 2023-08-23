import React from 'react';

const MenuContent = () => {
  return (
    <section className='flex flex-col sm:flex-row w-[90%] my-6'>

      <div className='flex flex-col w-full sm:w-[66%]'>

        <div className='flex flex-col sm:flex-row w-full mt-4 sm:mt-0'>
          {/* STARTERS */}
          <div className='flex flex-col items-center w-full sm:w-[50%] sm:border-r-[1px] border-black'>
            <h4 className='w-fit text-[20px] bg-secondary-color text-main-color px-6 rounded-sm'>Starters</h4>
            {/* Starter 1 */}
            <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px] border-b-[2px] border-dotted border-black'>
              <h5 className='w-[70%] text-[14px] font-bold'>Croque <br />Monsieur Sliders</h5>
              <p className='w-[30%] flex justify-end'>
                <span className='font-bold'>$12</span>
                <span className='text-[12px] underline'>19</span>
              </p>
              <p className='w-full text-[12px]'>Mini ham and cheese sandwiches with a béchamel twist, perfect for sharing.</p>
            </article>
            {/* Starter 2 */}
            <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px] border-b-[2px] border-dotted border-black'>
              <h5 className='w-[70%] text-[14px] font-bold'>Cheese Plate</h5>
              <p className='w-[30%] flex justify-end'>
                <span className='font-bold'>$15</span>
                <span className='text-[12px] underline'>00</span>
              </p>
              <p className='w-full text-[12px]'>An artisanal assortment of French cheeses, accompanied by crusty bread and fruits.</p>
            </article>
            {/* Starter 3 */}
            <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px] border-b-[2px] border-dotted border-black'>
              <h5 className='w-[70%] text-[14px] font-bold'>Spinach and <br /> Cheese Crepes</h5>
              <p className='w-[30%] flex justify-end'>
                <span className='font-bold'>$10</span>
                <span className='text-[12px] underline'>70</span>
              </p>
              <p className='w-full text-[12px]'>Light crepes filled with creamy spinach and cheese, a simple yet delightful option.</p>
            </article>
            {/* Starter 4 */}
            <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px]'>
              <h5 className='w-[70%] text-[14px] font-bold'>Garlic <br /> Butter Baguette</h5>
              <p className='w-[30%] flex justify-end'>
                <span className='font-bold'>$8</span>
                <span className='text-[12px] underline'>10</span>
              </p>
              <p className='w-full text-[12px]'>Warm baguette slices brushed with garlic butter, an iconic French starter to enjoy.</p>
            </article>
          </div>


          {/* SALADS */}
          <div className='flex flex-col items-center w-full sm:w-[50%] border-t-[1px] border-black sm:border-t-[0px] pt-4 sm:pt-0'>
            <h4 className='w-fit text-[20px] bg-secondary-color text-main-color px-6 rounded-sm'>Salads</h4>
            {/* Salad 1 */}
            <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px] border-b-[2px] border-dotted border-black'>
              <h5 className='w-[70%] text-[14px] font-bold'>Classic <br /> Niçoise Salad</h5>
              <p className='w-[30%] flex justify-end'>
                <span className='font-bold'>$12</span>
                <span className='text-[12px] underline'>99</span>
              </p>
              <p className='w-full text-[12px]'>A colorful ensemble of crisp veggies, olives, and feta, drizzled with tangy lemon vinaigrette.</p>
            </article>
            {/* Salad 2 */}
            <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px] border-b-[2px] border-dotted border-black'>
              <h5 className='w-[70%] text-[14px] font-bold'>Couscous and <br /> Greens Medley</h5>
              <p className='w-[30%] flex justify-end'>
                <span className='font-bold'>$10</span>
                <span className='text-[12px] underline'>22</span>
              </p>
              <p className='w-full text-[12px]'>Wholesome couscous combined with fresh greens, herbs, and a zesty Mediterranean touch.</p>
            </article>
            {/* Salad 3 */}
            <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px] border-b-[2px] border-dotted border-black'>
              <h5 className='w-[70%] text-[14px] font-bold'>Goat Cheese <br /> Harvest Salad</h5>
              <p className='w-[30%] flex justify-end'>
                <span className='font-bold'>$14</span>
                <span className='text-[12px] underline'>55</span>
              </p>
              <p className='w-full text-[12px]'>A harvest of mixed greens crowned with warm goat cheese, honey-roasted nuts, and berry balsamic.</p>
            </article>
            {/* Starter 4 */}
            <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px]'>
              <h5 className='w-[70%] text-[14px] font-bold'>Grilled Chicken <br /> & Romaine Tango</h5>
              <p className='w-[30%] flex justify-end'>
                <span className='font-bold'>$18</span>
                <span className='text-[12px] underline'>40</span>
              </p>
              <p className='w-full text-[12px]'>Grilled chicken dances atop crisp romaine, entwined with classic Caesar dressing and house-made croutons.</p>
            </article>
          </div>
        </div>


        {/* SOUPS */}
        <div className='flex flex-wrap justify-around w-full mt-4'>
          <div className='w-full flex justify-center items-center'>
            <hr className='w-[30%] border-black' />
            <h4 className='w-fit mx-4 text-[20px] bg-secondary-color text-main-color px-6 rounded-sm'>Soups</h4>
            <hr className='w-[30%] border-black' />
          </div>
          {/* Soup 1 */}
          <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px]'>
            <h5 className='w-[70%] text-[14px] font-bold'>Lentil <br /> du Jour</h5>
            <p className='w-[30%] flex justify-end'>
              <span className='font-bold'>$16</span>
              <span className='text-[12px] underline'>50</span>
            </p>
            <p className='w-full text-[12px]'>Savor a heartwarming bowl of our daily lentil soup, brimming with rich flavors and wholesome ingredients.</p>
          </article>
          {/* Soup 2 */}
          <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px]'>
            <h5 className='w-[70%] text-[14px] font-bold'>French <br /> Onion Soup</h5>
            <p className='w-[30%] flex justify-end'>
              <span className='font-bold'>$9</span>
              <span className='text-[12px] underline'>30</span>
            </p>
            <p className='w-full text-[12px]'>A comforting bowl of caramelized onions in savory broth, topped with melted cheese.</p>
          </article>
        </div>


        {/* DESSERTS */}
        <div className='flex flex-wrap justify-around w-full mt-4'>
          <div className='w-full flex justify-center items-center'>
            <hr className='w-[30%] border-black' />
            <h4 className='w-fit mx-4 text-[20px] bg-secondary-color text-main-color px-6 rounded-sm'>Desserts</h4>
            <hr className='w-[30%] border-black' />
          </div>
          {/* Dessert 1 */}
          <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px]'>
            <h5 className='w-[70%] text-[14px] font-bold'>Chocolate <br />Lava Delight</h5>
            <p className='w-[30%] flex justify-end'>
              <span className='font-bold'>$9</span>
              <span className='text-[12px] underline'>10</span>
            </p>
            <p className='w-full text-[12px]'>Decadent chocolate lava cake, oozing with warm, velvety goodness, a dessert lover's dream.</p>
          </article>
          {/* Dessert 2 */}
          <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px]'>
            <h5 className='w-[70%] text-[14px] font-bold'>Berry Crème <br /> Brûlée </h5>
            <p className='w-[30%] flex justify-end'>
              <span className='font-bold'>$14</span>
              <span className='text-[12px] underline'>00</span>
            </p>
            <p className='w-full text-[12px]'>Delicate custard infused with berries, crowned with caramelized sugar, a timeless French treat.</p>
          </article>
        </div>
      </div>


      {/* MAIN DISHES */}
      <div className='flex flex-col items-center w-full sm:w-[33%] border-l-0 sm:border-l-[1px] border-black border-t-[1px] border-black sm:border-t-[0px] pt-4 sm:pt-0'>
        <h4 className='w-fit text-[20px] bg-secondary-color text-main-color px-6 rounded-sm'>Main Dishes</h4>
        {/* Main 1 */}
        <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px] border-b-[2px] border-dotted border-black'>
          <h5 className='w-[70%] text-[14px] font-bold'>Coq au Vin</h5>
          <p className='w-[30%] flex justify-end'>
            <span className='font-bold'>$20</span>
            <span className='text-[12px] underline'>99</span>
          </p>
          <p className='w-full text-[12px]'>Tender chicken in red wine with mushrooms and herbs, a comforting rustic French classic.</p>
        </article>
        {/* Main 2 */}
        <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px] border-b-[2px] border-dotted border-black'>
          <h5 className='w-[70%] text-[14px] font-bold'>Bouillabaisse</h5>
          <p className='w-[30%] flex justify-end'>
            <span className='font-bold'>$25</span>
            <span className='text-[12px] underline'>85</span>
          </p>
          <p className='w-full text-[12px]'>Fragrant seafood stew, an array of fresh fish and shellfish in Provençal-inspired broth.</p>
        </article>
        {/* Main 3 */}
        <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px] border-b-[2px] border-dotted border-black'>
          <h5 className='w-[70%] text-[14px] font-bold'>Steak Frites</h5>
          <p className='w-[30%] flex justify-end'>
            <span className='font-bold'>$28</span>
            <span className='text-[12px] underline'>20</span>
          </p>
          <p className='w-full text-[12px]'>Entrecôte steak, crispy fries, savory sauce—a timeless pairing for an indulgent French experience.</p>
        </article>
        {/* Main 4 */}
        <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px] border-b-[2px] border-dotted border-black'>
          <h5 className='w-[70%] text-[14px] font-bold'>Ratatouille <br /> Tartine</h5>
          <p className='w-[30%] flex justify-end'>
            <span className='font-bold'>$17</span>
            <span className='text-[12px] underline'>30</span>
          </p>
          <p className='w-full text-[12px]'>Vibrant ratatouille spread on crusty bread, a taste of the Mediterranean countryside.</p>
        </article>
        {/* Salad 1 */}
        <article className='mt-6 flex flex-wrap w-[300px] sm:w-[200px] h-[150px] border-b-[2px] border-dotted border-black'>
          <h5 className='w-[70%] text-[14px] font-bold'>Duck Confit</h5>
          <p className='w-[30%] flex justify-end'>
            <span className='font-bold'>$30</span>
            <span className='text-[12px] underline'>50</span>
          </p>
          <p className='w-full text-[12px]'>Crispy slow-cooked duck leg, luscious root vegetables—culinary finesse delivered on every plate.</p>
        </article>


        {/* SPECIAL */}
        <article className='mt-6 flex flex-wrap w-[300px] sm:w-[220px] h-[230px] p-[3px] border border-black rounded-[40px]'>
          <div className='flex flex-col flex-wrap border border-dotted border-black rounded-[37px] px-4 py-2'>
            <h4 className='self-center font-extrabold text-[20px] mb-2 underline'>Special</h4>
            <h5 className='w-[70%] text-[14px] font-bold'>Truffle-Infused Filet Mignon</h5>
            <p className='w-full text-[12px] mt-4'>Succulent filet mignon, elegantly infused with truffle essence, a gourmet delight that transcends expectations.</p>
          </div>
          
        </article>


      </div>

    </section>
  )
};

export default MenuContent;