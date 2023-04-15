import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRemoveLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.825 8.258c-.18.048-.295.152-1.51 1.367L14 10.94l-1.29-1.289c-1.315-1.313-1.436-1.412-1.719-1.41a.898.898 0 0 0-.539.244.902.902 0 0 0-.212.515c0 .274.107.404 1.411 1.71L12.94 12l-1.312 1.312c-1.189 1.189-1.316 1.33-1.37 1.508-.161.535.326 1.048.886.932.188-.038.251-.095 1.526-1.365L14 13.062l1.33 1.325c1.275 1.27 1.338 1.327 1.526 1.365a.751.751 0 0 0 .886-.533c.052-.179.052-.226 0-.399-.054-.178-.181-.319-1.37-1.508L15.06 12l1.312-1.312c1.165-1.166 1.317-1.332 1.367-1.499a.75.75 0 0 0-.515-.93 3.216 3.216 0 0 0-.201-.056l-.198.055'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRemoveLeft);
export default ForwardRef;
