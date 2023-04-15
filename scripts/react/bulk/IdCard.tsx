import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgIdCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.438 6.075a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.264.254.514.399.861.503.321.095 2.725.095 3.046 0 .347-.104.597-.249.861-.503a1.967 1.967 0 0 0 0-2.866 1.966 1.966 0 0 0-.861-.503c-.336-.099-2.766-.091-3.085.011m8.262 7.241a.745.745 0 0 0 .029 1.382c.126.053.396.062 1.78.061 1.5-.001 1.644-.007 1.791-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.147-.068-.29-.074-1.8-.074s-1.653.006-1.8.074m0 3a.745.745 0 0 0 .029 1.382c.126.053.396.062 1.78.061 1.5-.001 1.644-.007 1.791-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.147-.068-.29-.074-1.8-.074s-1.653.006-1.8.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgIdCard);
export default ForwardRef;
