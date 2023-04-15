import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackageDashRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.973 2.059a4.27 4.27 0 0 0-1.693.722c-.331.243-2.242 2.155-2.497 2.499a4.33 4.33 0 0 0-.697 1.55L2.049 7h19.904l-.054-.23a4.293 4.293 0 0 0-.711-1.53c-.288-.385-2.26-2.326-2.568-2.527-.543-.356-1.024-.551-1.615-.654-.466-.082-9.581-.081-10.032 0M15.7 15.316a.745.745 0 0 0 .029 1.382c.126.053.396.062 1.78.061 1.5-.001 1.644-.007 1.791-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.147-.068-.29-.074-1.8-.074s-1.653.006-1.8.074m0 3a.745.745 0 0 0 .029 1.382c.126.053.396.062 1.78.061 1.5-.001 1.644-.007 1.791-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.147-.068-.29-.074-1.8-.074s-1.653.006-1.8.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageDashRight);
export default ForwardRef;
