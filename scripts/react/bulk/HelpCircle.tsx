import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHelpCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.473 5.28A3.762 3.762 0 0 0 9.26 6.445a3.705 3.705 0 0 0-1.005 2.298c-.039.496.097.784.443.942.506.229 1.058-.152 1.061-.733.002-.301.077-.588.248-.946.438-.917 1.522-1.433 2.495-1.185.795.202 1.374.745 1.643 1.539.103.305.103.975 0 1.28a2.396 2.396 0 0 1-.551.925c-.259.26-.459.386-.912.574-.756.314-1.261.854-1.397 1.493-.025.117-.045.504-.044.86.001.544.013.674.075.808a.743.743 0 0 0 1.368 0c.062-.133.074-.263.075-.769l.001-.608.12-.137c.08-.091.226-.18.436-.264.929-.375 1.643-1.032 2.066-1.902a3.73 3.73 0 0 0-.796-4.329 3.649 3.649 0 0 0-1.666-.929c-.386-.098-1.092-.138-1.447-.082m.107 10.815a.994.994 0 0 0-.011 1.802c.837.417 1.745-.491 1.328-1.328-.25-.501-.823-.707-1.317-.474'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHelpCircle);
export default ForwardRef;
