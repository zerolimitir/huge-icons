import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAtm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M4.815 1.277a.8.8 0 0 0-.462.354l-.093.149v20.44l.093.149c.357.574 1.223.443 1.363-.207.024-.113.044-.474.044-.802v-.597l5.37-.014c5.831-.014 5.533-.003 6.145-.23a3.774 3.774 0 0 0 2.412-2.861c.077-.407.077-10.909 0-11.316a3.774 3.774 0 0 0-2.412-2.861c-.612-.227-.314-.216-6.145-.23l-5.37-.014-.001-.609c-.001-.678-.039-.908-.179-1.092-.159-.209-.502-.325-.765-.259m11.763 3.544c.371.097.696.291 1.003.598.447.446.659.939.659 1.529v.292H5.76V4.76h5.292c4.622 0 5.321.008 5.526.061M18.24 10v1.24H5.76V8.76h12.48V10m0 5.052c0 2.523 0 2.529-.25 3.005-.165.314-.619.768-.933.933-.503.264-.174.25-6.005.25H5.76v-6.48h12.48v2.292'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAtm);
export default ForwardRef;
