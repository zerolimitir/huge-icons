import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapLocationBelow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.34 10.046a4.934 4.934 0 0 0-1.52.471c-1.674.821-2.718 2.4-2.808 4.246-.064 1.289.483 2.88 1.533 4.466C14.652 20.9 16.023 22 17 22c.42 0 .996-.239 1.514-.628 1.66-1.245 3.179-3.817 3.45-5.84.1-.747-.034-1.686-.347-2.443-.861-2.079-3.03-3.33-5.277-3.043m1.18 3.053c.397.14.723.471.882.895.131.349.101.82-.073 1.175a1.512 1.512 0 0 1-.729.704c-.187.088-.276.103-.6.103-.324 0-.413-.015-.6-.103a1.512 1.512 0 0 1-.729-.704 1.569 1.569 0 0 1-.071-1.18 1.472 1.472 0 0 1 1.48-.971c.143.01.341.046.44.081'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocationBelow);
export default ForwardRef;
