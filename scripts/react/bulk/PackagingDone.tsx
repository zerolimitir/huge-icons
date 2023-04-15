import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackagingDone = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.973 2.059a4.27 4.27 0 0 0-1.693.722c-.331.243-2.242 2.155-2.497 2.499a4.33 4.33 0 0 0-.697 1.55L2.049 7h19.904l-.054-.23a4.293 4.293 0 0 0-.711-1.53c-.288-.385-2.26-2.326-2.568-2.527-.543-.356-1.024-.551-1.615-.654-.466-.082-9.581-.081-10.032 0m7.721 9.258c-.133.061-.473.425-1.676 1.799-1.388 1.586-1.518 1.724-1.634 1.724-.103 0-.284-.127-1.005-.708-.936-.755-1.149-.893-1.376-.891a.893.893 0 0 0-.551.244.895.895 0 0 0-.212.525c0 .309.122.444 1.16 1.278.539.433 1.065.835 1.169.892a1.75 1.75 0 0 0 1.045.18c.413-.064.723-.228 1.034-.548.549-.565 2.964-3.359 3.035-3.512.18-.384-.003-.827-.412-.998a.672.672 0 0 0-.577.015'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingDone);
export default ForwardRef;
