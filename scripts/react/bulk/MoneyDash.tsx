import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyDash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.7 6.316a.745.745 0 0 0 .029 1.382c.219.091 2.323.091 2.542 0a.748.748 0 0 0 0-1.396c-.122-.051-.348-.062-1.28-.061-1.014.001-1.148.008-1.291.075m6.738 3.759a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.814.781 2.04.76 2.817-.049A1.91 1.91 0 0 0 14 12c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011m5.262 6.241a.745.745 0 0 0 .029 1.382c.122.051.348.062 1.271.062 1.201 0 1.299-.014 1.515-.212.401-.369.272-1.03-.244-1.246-.122-.051-.348-.062-1.28-.061-1.014.001-1.148.008-1.291.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyDash);
export default ForwardRef;
