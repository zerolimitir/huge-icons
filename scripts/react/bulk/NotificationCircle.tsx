import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgNotificationCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.34 2.046c-1.601.204-3.068 1.258-3.816 2.74-.319.633-.478 1.263-.512 2.02-.035.789.093 1.468.421 2.228.447 1.036 1.427 2.033 2.462 2.505 1.619.738 3.435.58 4.945-.431.385-.258 1.01-.883 1.268-1.268.393-.587.648-1.19.795-1.882.1-.468.1-1.448 0-1.916-.218-1.024-.66-1.846-1.379-2.566a4.979 4.979 0 0 0-4.184-1.43'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNotificationCircle);
export default ForwardRef;
