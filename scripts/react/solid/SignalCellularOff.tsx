import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSignalCellularOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.7 2.327c-.334.184-.486.501-.412.862.039.185.142.294 3.581 3.736l3.541 3.546-2.955 2.562c-2.145 1.86-2.995 2.62-3.099 2.775-.415.611-.462 1.33-.131 2.023.232.485.64.846 1.198 1.059l.237.09 6.64.011 6.64.01 1.32 1.318c.888.886 1.369 1.338 1.469 1.38a.735.735 0 0 0 1.031-.679.847.847 0 0 0-.077-.332C21.586 20.503 3.51 2.432 3.332 2.344c-.146-.073-.513-.083-.632-.017m15.671.733c-.521.114-.62.19-3.753 2.902a261.64 261.64 0 0 0-2.968 2.589c-.006.016 2.058 2.097 4.587 4.626l4.596 4.596.074-.217c.069-.205.074-.522.084-6.456.007-4.39-.003-6.302-.033-6.451-.229-1.105-1.427-1.841-2.587-1.589'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignalCellularOff);
export default ForwardRef;
