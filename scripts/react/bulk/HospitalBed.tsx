import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHospitalBed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.849 3.761a.825.825 0 0 0-.524.409c-.083.172-.085.216-.085 2.336v2.161l.093.177a.755.755 0 0 0 1.334 0c.087-.165.093-.221.093-.87V7.28h1.48v.694c0 .649.006.705.093.87a.755.755 0 0 0 1.334 0l.093-.177V4.333l-.093-.177a.755.755 0 0 0-1.334 0c-.087.165-.093.221-.093.87v.694h-1.48v-.694c0-.649-.006-.705-.093-.87-.152-.287-.516-.463-.818-.395M1.807 8.289c-.249.053-.465.281-.523.549-.062.291-.062 13.033 0 13.324.163.758 1.269.758 1.432 0 .028-.131.044-.788.044-1.804V18.76h18.48v1.598c0 1.016.016 1.673.044 1.804.163.758 1.269.758 1.432 0 .029-.135.044-.906.043-2.254-.001-1.906-.006-2.059-.075-2.208a.734.734 0 0 0-.413-.398c-.133-.055-1.182-.062-9.83-.062H2.76l-.001-4.11c-.001-2.68-.015-4.172-.042-4.289-.097-.421-.47-.647-.91-.552m3.86 2.776a.928.928 0 0 0-.368.233c-.275.276-.299.409-.299 1.649V14h5v-1.053c0-1.244-.022-1.363-.303-1.644-.298-.298-.339-.303-2.214-.3-1.315.002-1.66.014-1.816.062'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHospitalBed);
export default ForwardRef;
