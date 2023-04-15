import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFolderOpenMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.44 2.061c-.63.128-1.07.367-1.543.838-.308.306-.392.419-.55.741-.325.662-.321.633-.337 2.61L3.995 8H20.01l-.021-.75c-.023-.866-.061-1.05-.336-1.61-.157-.32-.243-.437-.55-.743-.306-.307-.423-.393-.743-.55-.659-.323-.616-.318-2.78-.348-2.118-.029-2.114-.028-2.687-.302-.162-.078-.576-.36-.956-.653-.968-.744-1.186-.861-1.85-.988-.404-.077-3.264-.074-3.647.005M8.7 14.316a.745.745 0 0 0 .029 1.382c.13.054.543.062 3.28.061 2.958-.001 3.14-.005 3.291-.075a.743.743 0 0 0 0-1.368c-.151-.07-.332-.074-3.3-.074s-3.149.004-3.3.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpenMinus);
export default ForwardRef;
