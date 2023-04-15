import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletAddClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2 12v3.005l1.79-.014c1.747-.013 1.797-.016 2.07-.106 1.008-.334 1.712-1.045 2.026-2.046.079-.252.094-.384.094-.839 0-.454-.015-.588-.094-.84-.312-1-1.011-1.706-2.026-2.044-.274-.092-.319-.094-2.07-.107L2 8.995V12m16.7 2.316a.734.734 0 0 0-.398.413c-.051.123-.062.354-.062 1.33v1.181l-1.19.001c-1.071.001-1.206.008-1.35.075a.745.745 0 0 0 .029 1.382c.123.051.354.062 1.33.062h1.181v1.098c0 .651.018 1.182.044 1.304.163.758 1.269.758 1.432 0 .026-.122.044-.653.044-1.304V18.76h1.098c.651 0 1.182-.018 1.304-.044.758-.163.758-1.269 0-1.432-.122-.026-.653-.044-1.304-.044H19.76l-.001-1.19c-.001-1.071-.008-1.206-.075-1.35-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletAddClose);
export default ForwardRef;
