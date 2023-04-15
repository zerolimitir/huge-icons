import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMessenger = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.12 2.039c-2.479.248-4.706 1.323-6.359 3.068-2.313 2.443-3.23 5.751-2.517 9.086.084.393.431 1.458.597 1.833l.091.206-.371 2.296-.372 2.295.07.238c.095.327.35.585.673.678l.231.067 2.282-.38 2.283-.381.322.142c2.074.912 4.615 1.057 6.815.391a9.762 9.762 0 0 0 4.196-2.517 9.446 9.446 0 0 0 1.802-2.438A9.988 9.988 0 0 0 17.72 3.806c-1.268-.888-2.651-1.44-4.227-1.687-.584-.092-1.833-.134-2.373-.08m4.81 8.516 1.988-1.491c.081-.062.193-.233-1.966 3.006L14 15l-2-1.5-2-1.501-1.93 1.446-1.988 1.491c-.081.062-.193.233 1.966-3.006L10 9l2 1.5 2 1.501 1.93-1.446'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMessenger);
export default ForwardRef;
