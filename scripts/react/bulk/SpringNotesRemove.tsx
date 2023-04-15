import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpringNotesRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.811 1.278a.883.883 0 0 0-.481.374c-.063.115-.071.297-.082 1.768-.009 1.101.001 1.689.031 1.788.089.304.412.55.721.55s.632-.246.721-.55c.03-.099.04-.687.031-1.788-.011-1.569-.016-1.646-.094-1.779a.807.807 0 0 0-.847-.363m8 0a.883.883 0 0 0-.481.374c-.063.115-.071.297-.082 1.768-.009 1.101.001 1.689.031 1.788.089.304.412.55.721.55s.632-.246.721-.55c.03-.099.04-.687.031-1.788-.011-1.569-.016-1.646-.094-1.779a.807.807 0 0 0-.847-.363M8.7 12.316a.745.745 0 0 0 .029 1.382c.13.054.543.062 3.28.061 2.958-.001 3.14-.005 3.291-.075a.743.743 0 0 0 0-1.368c-.151-.07-.332-.074-3.3-.074s-3.149.004-3.3.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpringNotesRemove);
export default ForwardRef;
