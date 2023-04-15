import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgReceipt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.7 6.316a.745.745 0 0 0 .029 1.382c.131.055.738.062 5.271.062 4.533 0 5.14-.007 5.271-.062a.748.748 0 0 0 0-1.396c-.131-.055-.737-.062-5.28-.061-4.903.001-5.138.004-5.291.075m0 4a.745.745 0 0 0 .029 1.382c.131.055.738.062 5.271.062 4.533 0 5.14-.007 5.271-.062a.748.748 0 0 0 0-1.396c-.131-.055-.737-.062-5.28-.061-4.903.001-5.138.004-5.291.075m0 4a.745.745 0 0 0 .029 1.382c.129.054.494.062 2.78.061 2.472-.001 2.641-.005 2.791-.075.38-.175.552-.587.398-.955a.734.734 0 0 0-.398-.413c-.15-.07-.318-.074-2.8-.074-2.482 0-2.65.004-2.8.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReceipt);
export default ForwardRef;
