import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.58 7.095A.976.976 0 0 0 5.002 8c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m5.858 2.98a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.814.781 2.04.76 2.817-.049A1.91 1.91 0 0 0 14 12c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011m7.262 3.241a.734.734 0 0 0-.398.413c-.051.123-.062.354-.062 1.33v1.181l-1.19.001c-1.071.001-1.206.008-1.35.075a.745.745 0 0 0 .029 1.382c.123.051.354.062 1.33.062h1.181v1.098c0 .651.018 1.182.044 1.304.163.758 1.269.758 1.432 0 .026-.122.044-.653.044-1.304V17.76h1.098c.651 0 1.182-.018 1.304-.044.758-.163.758-1.269 0-1.432-.122-.026-.653-.044-1.304-.044H19.76l-.001-1.19c-.001-1.071-.008-1.206-.075-1.35-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyAdd);
export default ForwardRef;
