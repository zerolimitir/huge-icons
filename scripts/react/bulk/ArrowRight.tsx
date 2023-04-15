import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.94 7.259c-.022.008-.09.025-.151.039a.811.811 0 0 0-.27.167.742.742 0 0 0-.233.73c.041.172.175.315 1.851 1.997l1.806 1.812-1.775 1.768c-.976.972-1.809 1.835-1.851 1.916a.78.78 0 0 0 .118.846c.191.218.577.284.865.149.108-.05.845-.762 2.267-2.189C18.733 12.32 18.76 12.29 18.76 12c0-.29-.026-.319-2.193-2.49-1.158-1.16-2.16-2.135-2.226-2.166-.135-.062-.34-.106-.401-.085'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
