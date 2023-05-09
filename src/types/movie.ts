export default interface Movie {
  external_id: number;
  body: string;
  cast: string[];
  country: string[];
  createdAt: {
    $date: number;
  };
  directors: string[];
  dontmissoutdate: null | string;
  duration: number;
  filmoftheweek: boolean;
  filmoftheweekdate: null | {
    $date: number;
  };
  filmoftheweektext: string;
  image: string;
  importedAt: null | string;
  keywords: null | string[];
  language: string;
  maccs_id: null | number;
  oneliner: string;
  premiere: boolean;
  premiereDate: null | {
    $date: number;
  };
  premiereDateText: null | string;
  slug: string;
  subtitles: string[];
  teaser: string;
  tip: boolean;
  tip_author: null | {
    id: string;
    first_name: string;
  };
  tiporder: null | number;
  tiptext: null | string;
  title: string;
  trailer: string;
  verheugfilm: boolean;
  versetrailer: boolean;
  year: number;
  related_articles: string[];
  screening_in_festivals: number[];
  screening_in_locations: {
    id: number;
    name: string;
    external_id: number;
  }[];
  confirmed_screening_count: number;
  first_screening: {
    $date: number;
  };
  last_screened_in_cities: {
    [city: string]: {
      $date: number;
    };
  };
  last_screening: {
    $date: number;
  };
  new_in_cineville: boolean;
  new_in_cities: string[];
  new_in_locations: number[];
  re_release_in_locations: number[];
  screening_count: number;
  screening_in_cities: string[];
  screening_info_per_city: {
    [city: string]: {
      first_screening: {
        $date: number;
      };
      last_screening: {
        $date: number;
      };
      screening_count: number;
    };
  };
  screening_info_per_city_id: {
    [cityId: string]: {
      first_screening: {
        $date: number;
      };
      last_screening: {
        $date: number;
      };
      screening_count: number;
    };
  };
  confirmed_last_screening: {
    $date: number;
  };
  confirmed_screening_in_cities: string[];
  confirmed_screening_in_locations: {
    id: number;
    name: string;
    external_id: number;
  }[];
  tipauthorimageurl: string;
  tip_in_cities: string[];
  mostVisited?: boolean;
  last_screening_week?: boolean;
  position?: string;
  date: number;
  imageSrc: string;
}
