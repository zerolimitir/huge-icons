import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStickyNote = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.7 8.316a.745.745 0 0 0 .029 1.382c.131.055.738.062 5.271.062 4.533 0 5.14-.007 5.271-.062a.748.748 0 0 0 0-1.396c-.131-.055-.737-.062-5.28-.061-4.903.001-5.138.004-5.291.075m0 5a.745.745 0 0 0 .029 1.382c.129.054.494.062 2.78.061 2.472-.001 2.641-.005 2.791-.075.38-.175.552-.587.398-.955a.734.734 0 0 0-.398-.413c-.15-.07-.318-.074-2.8-.074-2.482 0-2.65.004-2.8.074m11.54.746c-1.648.352-2.849 1.562-3.178 3.2-.054.267-.062.59-.053 2.028L15.02 21l3.5-3.5 3.5-3.5-1.76.003c-1.341.003-1.822.017-2.02.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStickyNote);
export default ForwardRef;
