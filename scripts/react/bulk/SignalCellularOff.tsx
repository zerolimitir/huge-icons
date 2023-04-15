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
            d='M2.807 2.288c-.375.083-.605.482-.518.902.037.184.151.302 3.58 3.735l3.54 3.546-2.954 2.562c-2.152 1.865-2.994 2.619-3.099 2.774-.415.612-.462 1.331-.131 2.024.232.485.64.846 1.198 1.059l.237.09 6.64.011 6.64.01 1.34 1.335c1.44 1.434 1.466 1.454 1.825 1.413a.738.738 0 0 0 .578-1.049c-.052-.112-2.824-2.907-9.189-9.266C4.672 3.618 3.36 2.324 3.24 2.301l-.2-.039a.841.841 0 0 0-.233.026'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignalCellularOff);
export default ForwardRef;
