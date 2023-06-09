import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTeacherThin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 6.316a.745.745 0 0 0 .029 1.382c.13.054.543.062 3.28.061 2.958-.001 3.14-.005 3.291-.075a.743.743 0 0 0 0-1.368c-.151-.07-.332-.074-3.3-.074s-3.149.004-3.3.074m3 4a.745.745 0 0 0 .029 1.382c.126.053.396.062 1.78.061 1.5-.001 1.644-.007 1.791-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.147-.068-.29-.074-1.8-.074s-1.653.006-1.8.074m-7.204.743a2.54 2.54 0 0 0-1.915 1.839c-.078.306-.078.898 0 1.204.309 1.215 1.524 2.045 2.738 1.868a2.546 2.546 0 0 0 2.069-1.71c.088-.267.106-.392.106-.76s-.018-.493-.106-.76c-.405-1.23-1.647-1.951-2.892-1.681m6.204 3.257c-.2.092-.299.2-.462.504-.586 1.094-1.887 2.057-3.318 2.454-.541.15-1.007.21-1.94.248-1.024.042-1.634.112-2.26.261-1.108.262-1.873.592-2.76 1.193-.792.536-1.637 1.493-1.702 1.927a.75.75 0 0 0 .44.782c.386.175.692.048 1.028-.429.814-1.152 2.419-1.977 4.234-2.174.209-.023.776-.059 1.26-.08.913-.04 1.33-.095 1.987-.263 1.634-.417 3.132-1.419 4.039-2.699.418-.59.562-.963.478-1.241-.132-.443-.617-.671-1.024-.483'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTeacherThin);
export default ForwardRef;
