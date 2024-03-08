const Utilities = {
    iconSetter(icon){
        switch(icon){
            case 'windows':
                return 'bi-windows'
            case 'apple':
                return 'bi-apple'
            case 'android':
                return 'bi-android2'
            case 'linux':
                return 'bi-ubuntu'
            case 'Overview':
                return 'bi-house-door';
            break;
            case 'Content Management':
                return 'bi-file-richtext';
            break;
            case 'Site Settings':
                return 'bi-gear';
            break;
            default:
            break;
        }
    }
};

export default Utilities;
