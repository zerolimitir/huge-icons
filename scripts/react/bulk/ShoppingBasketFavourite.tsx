import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShoppingBasketFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.38 6.044a4.657 4.657 0 0 0-1.16.366 4.044 4.044 0 0 0-2.202 3.261L1.99 10h20.02l-.028-.329c-.163-1.863-1.578-3.375-3.397-3.628-.378-.052-12.836-.052-13.205.001m4.543 7.22c-.5.134-.953.52-1.194 1.016-.128.264-.147.344-.162.674-.021.463.06.793.273 1.117.083.126.634.71 1.225 1.297 1.274 1.266 1.313 1.292 1.935 1.292.622 0 .661-.026 1.935-1.292.591-.587 1.142-1.171 1.225-1.297.216-.328.296-.659.271-1.123-.017-.326-.038-.414-.162-.672a1.878 1.878 0 0 0-2.168-1.015c-.315.083-.553.218-.852.484l-.249.221-.249-.221a2.985 2.985 0 0 0-.433-.322 2.005 2.005 0 0 0-1.395-.159'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketFavourite);
export default ForwardRef;
