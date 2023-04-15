import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPencilPaper = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.1 3.054c-.451.149-.762.419-.956.826l-.124.26-.012 1.43L1.996 7h3.008l-.012-1.43-.012-1.43-.113-.244a1.676 1.676 0 0 0-.766-.761c-.284-.129-.744-.167-1.001-.081m8.6 4.262a.745.745 0 0 0 .029 1.382c.13.054.543.062 3.28.061 2.958-.001 3.14-.005 3.291-.075a.743.743 0 0 0 0-1.368c-.151-.07-.332-.074-3.3-.074s-3.149.004-3.3.074m0 4a.745.745 0 0 0 .029 1.382c.13.054.543.062 3.28.061 2.958-.001 3.14-.005 3.291-.075a.743.743 0 0 0 0-1.368c-.151-.07-.332-.074-3.3-.074s-3.149.004-3.3.074m0 4a.745.745 0 0 0 .029 1.382c.126.053.396.062 1.78.061 1.5-.001 1.644-.007 1.791-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.147-.068-.29-.074-1.8-.074s-1.653.006-1.8.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPencilPaper);
export default ForwardRef;
