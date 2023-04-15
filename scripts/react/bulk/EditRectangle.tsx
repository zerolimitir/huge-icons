import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgEditRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.275 7.43c-1.861 1.864-3.443 3.477-3.514 3.583-.223.334-.28.58-.53 2.307-.268 1.85-.269 1.914-.037 2.251a1.1 1.1 0 0 0 .692.412c.214.027 3.361-.424 3.654-.524.438-.149.654-.349 4.073-3.77l3.353-3.355-.293-.052c-1.222-.218-2.437-1.053-3.232-2.222a4.572 4.572 0 0 1-.718-1.71l-.063-.311-3.385 3.391'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEditRectangle);
export default ForwardRef;
