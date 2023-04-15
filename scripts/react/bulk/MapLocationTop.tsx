import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapLocationTop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.34 2.046c-.759.097-1.693.477-2.321.946a5.19 5.19 0 0 0-1.492 1.779c-.555 1.136-.665 2.281-.339 3.528C12.911 11.068 15.386 14 17 14c1.805 0 4.555-3.568 4.963-6.438.105-.738-.031-1.711-.346-2.473-.861-2.079-3.03-3.33-5.277-3.043m1.18 3.053c.397.14.723.471.882.895.131.349.101.82-.073 1.175a1.512 1.512 0 0 1-.729.704c-.187.088-.276.103-.6.103-.324 0-.413-.015-.6-.103a1.512 1.512 0 0 1-.729-.704 1.569 1.569 0 0 1-.071-1.18 1.472 1.472 0 0 1 1.48-.971c.143.01.341.046.44.081'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocationTop);
export default ForwardRef;
