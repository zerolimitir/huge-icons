import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPlaylist = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.624 4.624 0 0 0-1.256 2.722c-.027.239-.037 2.825-.028 7.661.012 6.887.017 7.314.085 7.54A2.86 2.86 0 0 0 4.3 22.666c.227.068.683.073 8.494.084 5.955.008 8.299-.001 8.418-.033a.807.807 0 0 0 .507-.513c.089-.331-.03-.638-.325-.832l-.168-.112-8.283-.02-8.283-.02-.186-.086a1.356 1.356 0 0 1-.597-.597c-.139-.283-.139-.791 0-1.074.123-.251.335-.463.586-.586l.197-.097 6.5-.022c6.469-.022 6.502-.022 6.84-.107 1.03-.259 1.665-.619 2.38-1.348.783-.797 1.202-1.66 1.339-2.755.056-.442.056-8.654 0-9.096a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.475-.047-10.484-.045-10.963.002m11.501 1.628c.541.188.892.408 1.29.805.397.398.617.749.805 1.29l.131.374v9.24l-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126-6.52.022c-5.974.02-6.541.027-6.771.09a2.583 2.583 0 0 0-.411.149l-.16.082.011-6.092.011-6.091.132-.38c.073-.209.205-.504.295-.655A3.826 3.826 0 0 1 5.214 3.29c.31-.205.861-.43 1.194-.486.119-.02 2.634-.033 5.712-.03l5.5.006.374.131m-7.782 3.297c-.921.094-1.714.828-1.912 1.772-.085.407-.085 3.633 0 4.04a2.294 2.294 0 0 0 1.6 1.724c.352.104.886.096 1.236-.018.152-.05 1.07-.488 2.04-.974 1.747-.875 1.767-.886 2.048-1.168.456-.455.656-.939.656-1.584 0-.646-.2-1.13-.656-1.584-.281-.28-.304-.293-2.044-1.165-.968-.485-1.85-.912-1.96-.95a2.583 2.583 0 0 0-1.008-.093m2.176 2.327c.942.471 1.752.899 1.8.951.115.124.212.36.212.514 0 .154-.097.39-.212.514-.048.052-.862.482-1.808.955-1.683.841-1.724.859-1.927.842-.274-.023-.514-.18-.615-.404-.071-.156-.076-.283-.076-1.907 0-1.611.005-1.752.074-1.904.115-.253.369-.409.672-.413.142-.003.439.132 1.88.852'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlaylist);
export default ForwardRef;